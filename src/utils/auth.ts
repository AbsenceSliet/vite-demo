import itg from "@itutorgroup/itg-jsbridge";
import { projectEnv } from "@/service/host";
import * as Cookies from "js-cookie";
const isApp = itg.isApp;
const { VITE_PASSPORT_DOMAIN } = projectEnv;
const toLogin = (fromWhere?: string, returnUrl?: string) => {
  let redirect = encodeURIComponent(returnUrl || window.location.href);
  if (isApp) {
    itg.app.login(redirect);
  } else {
    window.location.href = `${VITE_PASSPORT_DOMAIN}?brandId=4&sourceType=opencourse_vjr&&fromType=vjrOpenCourse&fromWhere=${fromWhere}&returnUrl=${redirect}`;
  }
};

const getUser: (
  fromWhere?: string,
  returnUrl?: string
) => Promise<{ clientSn: string; token: string }> = async function (
  fromWhere?: string,
  returnUrl?: string
) {
  if (isApp) {
    try {
      // app 中ticket是加密的， token 是不加密的与 lp_cc的ticket 相同
      let { clientSn, token } = await itg.getUserInfo(["clientSn", "token"]);
      if (!clientSn) {
        toLogin(fromWhere, returnUrl);
      } else {
        return {
          clientSn,
          token,
        };
      }
    } catch (error) {
      throw new Error("请登录～");
    }
  } else {
    let info = Cookies.get("l_p_cc_0");
    if (info) {
      var data = JSON.parse(decodeURIComponent(info));
      data.token = data.ticket;
      return data;
    } else {
      toLogin(fromWhere, returnUrl);
    }
  }
};

export {
    getUser,
    toLogin
}