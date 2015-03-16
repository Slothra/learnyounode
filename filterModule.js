var fs = require('fs')
var path = require('path');
module.exports = function (input, filterType, callback){
	var fileType = '.' + filterType;
	fs.readdir(input, function makeList(err, data){
		var filteredArray = [];
		if (err){
			return callback(err);
		}
		for (i=0, len=data.length; i<len; i++) {
			if (path.extname(data[i]) === fileType) {
				filteredArray.push(data[i]);
			};
		};
		return callback(null, filteredArray);
	})
}