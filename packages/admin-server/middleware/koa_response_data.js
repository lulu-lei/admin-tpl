// 处理业务逻辑的中间件
const path = require("path");
const { getJsonData } = require("../utils/file");

module.exports = async (ctx, next) => {
    const url = ctx.request.url;
    let filePath = url.replace("/api", "");
    filePath = path.join(__dirname, "../data" + filePath + ".json");
    try {
        const result = await getJsonData(filePath);
        ctx.response.body = result;
    } catch (error) {
        ctx.response.body = {
            errorMessage: "不存在"
        };
    }
    
    await next();
}