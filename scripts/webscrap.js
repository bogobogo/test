var fetch = require('node-fetch');

projectList = ['1'];
projectList.forEach(function(project) {
    fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body))
});