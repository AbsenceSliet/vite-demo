import service from "@/service";
import { projectEnv } from "@/service/host";
const { VITE_OPEN_API_HOST } = projectEnv;
const wechatApi = `${VITE_OPEN_API_HOST}/Wechat/v2/Basic/json/reply/GetJSSDK`;
const getWechatConfig = () =>
  service.post(
    `${wechatApi}`,
    {
      data: {
        url: `${encodeURIComponent(window.location.href.split("#")[0])}`,
        CustomerToken: "prdpahxkidjrwxlpaiDARjOv",
      },
    },
    {
      isNeedToken: false,
      isNeedLoading: false,
    }
  );

export { getWechatConfig };
