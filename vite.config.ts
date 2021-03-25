import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
defineConfig
export default function () {
  return {

    // 引用全局 scss
    cssPreprocessOptions: {
      scss: {
        additionalData: path.resolve(__dirname,'@import "./src/assets/style/index.scss";'),
      },
    },
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    plugins: [vue()],
    optimizeDeps: {
      link: ["@itutorgroup/itg-jsbridge"],
    },
  };
}
