import axios from "axios";
// import qs from "qs"

axios.defaults.baseURL = "http://localhost:9001";  //根据项目自己更改
axios.interceptors.request.use((config) => {
  //如果项目中有将token绑定在请求数据的头部，服务器可以有选择的返回数据，只对有效的请求返回数据，这样写
  config.headers.Authorization = "Bearer " + window.localStorage.getItem("token");
  return config;
})
//在response中
axios.interceptors.response.use(config => {
  return config;
})

const http = {};

http.post = function (api, data) {
  //let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.post(api, data).then(response => {
      resolve(response);
    })
  })
}

http.get = function (api, data) {
  //let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.get(api, data).then(response => {
      resolve(response);
    })
  })
}

http.delete = function (api, data) {
  return new Promise((resolve, reject) => {
    axios.delete(api, data).then(response => {
      resolve(response);
    })
  })
}

http.put = function (api, data) {
  return new Promise((resolve, reject) => {
    axios.put(api, data).then(response => {
      resolve(response);
    })
  })
}

export default http;