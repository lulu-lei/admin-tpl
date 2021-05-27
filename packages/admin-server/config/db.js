const Sequelize = require('sequelize');

// 使用 url 形式连接数据库
// const theDb = new Sequelize('mysql://root:3306@localhost/carlo_admin', {
//     define: {
//         timestamps: false // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
//     }
// })

const theDb = new Sequelize("carlo_admin", "root", "Carlo555@", {
    host: 'localhost',    //数据库地址,默认本机
    port:'3306',
    dialect: 'mysql'
});

module.exports = {
    theDb
}