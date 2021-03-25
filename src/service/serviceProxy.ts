import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Service from "./http";
import {
  IServiceType,
  IServiceProxyMethods,
  ICustomConfig,
} from "./index.type";
import { has } from "lodash";
import Loading from "../utils/loading";

class ServiceProxy {
  private http: IServiceType;
  private customConfig: ICustomConfig = {
    isNeedLoading: true,
    isNeedToken: true,
  };
  private requestLoadingCount: number = 0;
  constructor(config: AxiosRequestConfig) {
    this.http = new Service(config);
  }
  public async serviceBridge(
    config: AxiosRequestConfig,
    customConfig: ICustomConfig = {}
  ): Promise<AxiosResponse> {
    customConfig = { ...this.customConfig, ...customConfig };
    this.addToken(config, customConfig);
    this.handleLoading(customConfig, true);
    this.requestLoadingCount++;
    try {
      return await this.http.fetch(config);
    } catch (error) {
      if (error.response.status === 401) {
        // token 失效
      }
      this.handleError(error);
      return Promise.reject(error);
    } finally {
      this.requestLoadingCount--;
      this.handleLoading(this.customConfig, false);
    }
  }
  private handleError(error: AxiosError) {
    if (error.message === "请求取消") {
      return;
    }
    // 处理错误信息提示
    console.log("error message", error.message);
  }
  private handleLoading(customConfig: ICustomConfig, isOpen: boolean) {
    if (!customConfig.isNeedLoading) return;
    // 判断loading 是否已经开启
    if (this.requestLoadingCount != 0) return;
    if (isOpen) {
      // 展示Loading
      Loading.show()
      return;
    }
    // 关闭loading
    Loading.hide()
    console.log("loading close");
  }
  private addToken(config: AxiosRequestConfig, customConfig: ICustomConfig) {
    if (customConfig.isNeedToken) {
      // token 从数据管理中获取
      config.headers.token = "";
    } else {
      if (has(config.headers, "token")) {
        delete config.headers.token;
      }
    }
  }
}
class ServiceProxyMethod extends ServiceProxy implements IServiceProxyMethods {
  public get(
    url: string,
    config?: AxiosRequestConfig,
    customConfig?: ICustomConfig
  ): Promise<AxiosResponse> {
    return this.serviceBridge(
      {
        url,
        method: "get",
        ...config,
      },
      customConfig
    );
  }
  public post(
    url: string,
    config?: AxiosRequestConfig,
    customConfig?: ICustomConfig
  ): Promise<AxiosResponse> {
    return this.serviceBridge(
      {
        url,
        method: "post",
        ...config,
      },
      customConfig
    );
  }
}
export default ServiceProxyMethod;
