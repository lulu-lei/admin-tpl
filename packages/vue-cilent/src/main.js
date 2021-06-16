import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./utils/request";
import "./assets/style/reset.css";

const app = createApp(App);
app.use(Antd).use(router).use(store).mount("#app");
app.config.globalProperties.$http = http;
