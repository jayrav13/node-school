var fs = require('fs')

var buf = fs.readFile(process.argv[2], function(err, data) {
	if(!err) {
		var str = data.toString();
		var arr = str.split('\n');
		console.log(arr.length - 1);
	}
});
