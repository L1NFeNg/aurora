import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    visualizer({
      // 如果存在本地服务端口，将在打包后自动展示
      open: false,
      // 分析图生成的文件名
      filename: "visualizer.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".vue", ".json", ".ts"],
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});