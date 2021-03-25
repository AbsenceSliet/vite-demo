import { AxiosResponse, AxiosRequestConfig } from "axios";
interface ICustomConfig {
  isNeedLoading?: boolean;
  isNeedToken?: boolean;
}
interface IServiceType {
  fetch: (config: AxiosRequestConfig) => Promise<AxiosResponse>;
}
interface IServiceProxyMethods {
  get: (
    url: string,
    config?: AxiosRequestConfig,
    customConfig?: ICustomConfig
  ) => Promise<AxiosResponse>;
  post: (
    url: string,
    config?: AxiosRequestConfig,
    customConfig?: ICustomConfig
  ) => Promise<AxiosResponse>;
}
export { IServiceType, IServiceProxyMethods, ICustomConfig };
