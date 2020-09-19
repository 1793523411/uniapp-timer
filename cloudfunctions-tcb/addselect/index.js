'use strict';
const db = uniCloud.database()
const collection = db.collection('select');
exports.main = async (event, context) => {
	collection.doc('e656fa635f637307000495056200386e').update({
	  select: event.select
	}).then(res => {
		console.log(res)
	});
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return event
};
