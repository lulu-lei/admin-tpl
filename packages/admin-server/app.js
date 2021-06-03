// 服务器的入口文件
// 1.创建Koa的实例对象
const Koa = require("koa");
const app = new Koa();
const koaRouter = require('koa-router')();
const user = require('./routes/user.js');
const koajwt = require('koa-jwt');
const cors = require('koa2-cors'); //跨域处理
app.use(require('koa-bodyparser')());
/**
 * 添加跨域设置
 */
app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      if (ctx.url === '/auth/user') {
        return '*'; // 允许来自所有域名请求
      }
      return 'http://localhost:3000'; //只允许http://localhost:8080这个域名的请求
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  })
);
/**
 * 添加Token验证
 */
app.use((ctx, next) => {
  return next().catch((err) => {
      if(err.status === 401){
          ctx.status = 401;
          ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
  })
})
app.use(koajwt({
  secret: 'vue-koa-demo'
}).unless({
  path: [/^\/auth\/user$/, /^\/auth\/user\/register$/]
}));
// 2.绑定中间件
// 
// const resDurationMiddleware = require("./middleware/koa_response_duration");
// app.use(resDurationMiddleware);
// // 
// const resHeaderMiddleware = require("./middleware/koa_response_header");
// app.use(resHeaderMiddleware);
// // 
// const resDataMiddleware = require("./middleware/koa_response_data");
// app.use(resDataMiddleware);
koaRouter.use('/auth', user.routes());
app.use(koaRouter.routes());

// 3.绑定端口号 9001
app.listen(9001, () => {
  console.log("Koa is listening on port 9001");
});