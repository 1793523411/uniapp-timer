'use strict';
const db = uniCloud.database()
const collection = db.collection('list');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	let tmp
	await collection.orderBy('year', 'desc')
					.orderBy('month', 'desc')
					.orderBy('day', 'desc').get().then(res => {
		// console.log(res)
		tmp = res
	})
	return tmp
};
