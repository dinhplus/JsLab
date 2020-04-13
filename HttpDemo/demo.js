var fs = require("fs");
var readlineSync = require("readline-sync");
var path = require("path");
var co = require("co");
var request = require("request");
var axios = require("axios");

var userList = JSON.parse(fs.readFileSync("./user.json"));
// console.log(userList);

function User() {
	// Thuộc tính
	this.username = "";
	this.password = "";

	// Phương thức
	this.setInfo = function (username, password) {
		this.username = username;
		this.password = password;
	};

	this.checkLogin = function () {
		let result = false;
		for (let index = 0; index < userList.length; index++) {
			if (
				this.username === userList[index].username &&
				this.password === userList[index].password
			)
				return true;
		}
		return result;
	};

	// Phải return this thì mới tạo mới được đối tượng
	return this;
}
// Cách sử dụng

function login() {
	var username = readlineSync.question(" what is your user name?");
	var password = readlineSync.question("passwords ???");
	var user = new User();
	user.setInfo(username, password);
	if (user.checkLogin()) {
		console.log("Đăng nhập thành công");
	} else {
		console.log("Đăng nhập thất bại");
	}
}
login();
// var user = new User();
// user.setInfo("admin", "123456");
// if (user.checkLogin()) {
// 	console.log("Đăng nhập thành công");
// } else {
// 	console.log("Đăng nhập thất bại");
// }
