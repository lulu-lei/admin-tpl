import { defineConfig } from "vite";
// import { getThemeVariables } from "antd/dist/theme";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vitePluginImp from "vite-plugin-imp";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 配置路径的别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "pages": resolve(__dirname, "src/pages")
    },
  },
  // 自定义构建时Rollup选项
  build: {
    rollupOptions: {
      input: {}
    }
  },
  // 插件
  plugins: [
    reactRefresh(),
    // 配置antd的按需引入
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  // css的预处理
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 配置antd的暗黑主题
          // ...getThemeVariables({
          //   dark: true
          // }),
          // 更改antd主题颜色
          ...{
            "primary-color": "#1DA57A",
            "link-color": "#1DA57A",
            "border-radius-base": "2px"
          }
        },
      }
    }
  }
})
