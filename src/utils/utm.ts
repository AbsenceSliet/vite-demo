import { getPathParams } from "./tools";
import * as Cookies from "js-cookie";
export default () => {
  const parseParams: { [key: string]: unknown } = getPathParams();
  const { clientSn = "", staffSn = "" } = parseParams;
  const domain = window.location.host.split(":")[0];
  if (clientSn || staffSn) {
    Cookies.set(
      "recomenderInfo",
      `{"clientSn":"${clientSn}","staffSn":"${staffSn}"}`,
      {
        domain: domain,
        path: "/",
      }
    );
  }
};
