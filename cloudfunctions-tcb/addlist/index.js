'use strict';
const db = uniCloud.database()
const collection = db.collection('list');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	collection.add({
		time:event.time,
		time2:event.time2,
		year:event.year,
		month:event.month,
		day:event.day,
		value:event.value,
		hour:event.hour
	}).then(res => {
		return res
	})
};
