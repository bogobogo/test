// var fetch = require('node-fetch');

// projectList = ['https://github.com/bogobogo/opensource2/blob/master/openSourceIsAwesome.json'];
// projectList.forEach(function(project) {
//     console.log(project);
//     fetch('https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json')
//     .then(res => console.log(res))
// });

var request = require("request")

var url = "https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})