import { createApp } from "vue";
import { Toast } from "vant";
import App from "./App.vue";
import useShare from "./utils/share";
import useMGM from "./utils/utm";
import router from "./routes/index";
import 'vant/lib/index.css'; // 全局引入样式
import "./index.scss"
useShare({ title: `${document.title}` });
useMGM();

const app = createApp(App);
app.use(router);
app.use(Toast)
app.mount("#app");
