import { defineConfig } from 'vite'
import { getThemeVariables } from "antd/dist/theme";
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // ...getThemeVariables({
          //   dark: true
          // }),
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
