var path = require('path');
var fs = require('fs');
var filterModule = require('./filterModule')
var input = process.argv[2];
var fileType = process.argv[3];



function logged(err, data){
	for (i=0, len=data.length; i<len; i++){
		console.log(data[i])
	}
}

filterModule(input, fileType, logged(err,data);

// Export a single function that takes exactly the arguments described.
// Call the callback exactly once with an error or some data as described.
// Don't change anything else, like global variables or stdout.
// Handle all the errors that may occur and pass them to the callback.