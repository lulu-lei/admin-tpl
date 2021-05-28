const { theDb } = require('../config/db.js');
const DataTypes = require("sequelize").DataTypes;
const userSchema = require('../models/user.js')(theDb, DataTypes);

// 通过用户名查找
const getUserByName = async function (name) {
	console.log("name-->", name);
	const userInfo = await userSchema.findOne({
		where: {
			user_name: name
		}
	})

	return userInfo
}

// 通过用户 id 查找
const getUserById = async function (id) {
	const userInfo = await userSchema.findOne({
		where: {
			id: id
		}
	});

	return userInfo
}

const getUserList = async function () {
	return await userSchema.findAndCount(); // findAndCount() 用 get 路由访问，会得到 204 状态：无数据返回。改用 post 就行
}

const registerUser = async function (name, password) {
	const userInfo = await userSchema.create({
		user_name: name,
		password: password
	});

	return userInfo;
}

module.exports = {
	getUserByName,
	getUserById,
	getUserList,
	registerUser
}