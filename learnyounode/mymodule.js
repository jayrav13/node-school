var fs = require('fs')
var pathLib = require('path')

module.exports = function (path, ext, callback) {

	fs.readdir(path, function (err, list) {
		if (err) {
			 return callback(err);
		}
		
		var filteredList = [];
	
		for(var i = 0; i < list.length; i++) {
			if(pathLib.extname(list[i]) == '.' + ext) {
				filteredList.push(list[i]);
			}
		}	
		
		callback(null, filteredList);
	});
}
