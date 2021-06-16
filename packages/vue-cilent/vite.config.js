import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
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
