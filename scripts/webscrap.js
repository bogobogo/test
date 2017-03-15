var fetch = require('node-fetch');

projectList = ['https://github.com/bogobogo/opensource2/blob/master/openSourceIsAwesome.json'];
projectList.forEach(function(project) {
    console.log(project);
    fetch('https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json')
    .then(res => console.log(res))
});