import { setWechatShareInfo, ShareParams } from "./wechat";
import * as itg from "@itutorgroup/itg-jsbridge";
import { isWechat, wechatShareUrl } from "./tools";
const { isApp,setShareInfo } = itg
export default (params: ShareParams) => {
  const config = {
    title: params.title || "默认标题",
    desc: params.desc || "默认描述",
    imgUrl: params.imgUrl || "",
    link: wechatShareUrl(params.link || window.location.href),
    success: params.success,
  };
  if (isWechat()) {
    setWechatShareInfo(config);
  } else if (isApp) {
    setShareInfo(config);
  }
};
