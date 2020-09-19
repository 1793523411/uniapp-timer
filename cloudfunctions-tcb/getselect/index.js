'use strict';
const db = uniCloud.database()
const collection = db.collection('select');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let tmp
	await collection.get().then(res => {
		// console.log(res)
		tmp = res
	})
	return tmp
};
