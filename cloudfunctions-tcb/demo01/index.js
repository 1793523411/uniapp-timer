'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('test')
	const res = await collection.limit(10).get()
	//返回数据给客户端
	return res
};
