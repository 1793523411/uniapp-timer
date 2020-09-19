'use strict';
const db = uniCloud.database()
const collection = db.collection('list');
exports.main = async (event, context) => {
	let myDate = new Date();
	let year = myDate.getFullYear();
	let month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
	let today = myDate.getDate()
	console.log(today)
	let tmp = {}
	await collection.where({
		year: year,
		month: month,
		day: today
	}).get().then(res => {
		// console.log(res.data)
		let originize = []
		let originizekey = []
		for (let i = 0; i < res.data.length; i++) {
			originize.push(res.data[i].value)
		}
		// console.log(originize)
		var objGroup = originize.reduce(function(obj, name) {
			obj[name] = obj[name] ? ++obj[name] : 1;
			return obj;
		}, {});

		for (let key in objGroup) {
			originizekey.push(key)
		}
		let obj = {}
		res.data.forEach(item => {
			if (!obj[item.value]) {
				obj[item.value] = +item.hour
			} else {
				obj[item.value] += +item.hour
			}
		})
		// console.log(objGroup)
		tmp = obj
		// return obj
		// let tmp = res
	})
	//返回数据给客户端
	return tmp
};
