var http = require('http');
var url = process.argv[2];

function simpleGet(){
	http.get(url, function (response){
		response.setEncoding('utf8');
		response.on('data', function(data){
			console.log(data)
		}).on('error', function(e){
			console.log("Got error: " + e.message);
		})	
	})
}


// function logged(response){
// 	response.on("err", function(){
// 		console.log("There has been an error");
// 	})
// 	response.on("data", function(){
// 		for (i=0, len=data.length; i<len; i++){
// 			console.log(data[i].toString());
// 		}
// 	})
// 	response.on("end", function(){
// 		console.log("End")
// 	})
// }

simpleGet();