var http = require('http')
var bl = require('bl')

var onGet = function (response){
	response.pipe(bl(onData))
}

var onData = function (err, data) {
	console.log(data.toString())
}

function getSimple(url, get){
	http.get(url, get);
}

for (i=2, len=process.argv.length; i<len; i++){
	var url = process.argv[i]
	getSimple(url,onGet)
}