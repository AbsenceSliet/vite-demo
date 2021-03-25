import { AxiosRequestConfig } from "axios";
import { IServiceProxyMethods } from "./index.type";
import ServiceProxyMethod from "./serviceProxy";

interface ConstructorType {
  new (config: AxiosRequestConfig): IServiceProxyMethods;
}
function createInstance(constructor: ConstructorType): IServiceProxyMethods {
  return new constructor({
    baseURL: "",
  });
}
const service: IServiceProxyMethods = createInstance(ServiceProxyMethod);
export default service;
