import wx from "weixin-js-sdk";
import { getWechatConfig } from "@/service/api";
import { wechatShareUrl, isWechat } from "@/utils/tools";
export interface ShareParams {
  title: string;
  desc?: string;
  link?: string;
  imgUrl?: string;
  success?: (param?: { platform: string }) => void;
}

export function setWechatShareInfo(params: ShareParams) {
  if (!isWechat()) return;
  try {
    getWechatConfig().then(
      (res: any) => {
        let data = res.data;
        if (data.IsSuccess) {
          wx.config({
            appId: data.Data.AppID,
            timestamp: data.Data.Timestamp,
            nonceStr: data.Data.NonceStr,
            signature: data.Data.Signature,
            jsApiList: [
              "onMenuShareAppMessage",
              "onMenuShareTimeline",
              "onMenuShareQQ",
              "updateAppMessageShareData",
              "updateTimelineShareData",
              "onMenuShareWeibo",
              "hideOptionMenu",
            ],
          });
          const config = {
            title: params.title,
            desc: params.desc,
            imgUrl: params.imgUrl,
            link: wechatShareUrl(params.link || window.location.href),
          };
          wx.ready(() => {
            wx.onMenuShareAppMessage({
              ...config,
              success: () => {
                console.log("f分享成功－－－－AppMessage");
                params.success && params.success({ platform: "AppMessage" });
              },
            });
            wx.onMenuShareTimeline({
              ...config,
              success: () => {
                console.log("f分享成功－－－－Timeline");
                params.success && params.success({ platform: "Timeline" });
              },
            });
            wx.onMenuShareQQ({
              ...config,
              success: () => {
                console.log("f分享成功－－－－QQ");
                params.success && params.success({ platform: "QQ" });
              },
            });
          });
        }
      },
      (rej) => {
        throw new Error(rej.message);
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
}
