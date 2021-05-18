// 服务器的入口文件
// 1.创建Koa的实例对象
const Koa = require("koa");
const app = new Koa();

// 2.绑定中间件
// 
const resDurationMiddleware = require("./middleware/koa_response_duration");
app.use(resDurationMiddleware);
// 
const resHeaderMiddleware = require("./middleware/koa_response_header");
app.use(resHeaderMiddleware);
// 
const resDataMiddleware = require("./middleware/koa_response_data");
app.use(resDataMiddleware);
// 3.绑定端口号 9001
app.listen(9001);