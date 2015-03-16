var http = require('http')
var bl = require('bl')
var url = process.argv[2]

var onGet = function (response){
	response.pipe(bl(onData))
}

var onData = function (err, data) {
	console.log(data.toString().length + "\n" + data.toString())
}

http.get(url, onGet)
