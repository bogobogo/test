// var fetch = require('node-fetch');

// ;
// projectList.forEach(function(project) {
//     console.log(project);
//     fetch('https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json')
//     .then(res => console.log(res))
// });
var request = require("request")
var projectList = ['https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json']


var url = "https://raw.githubusercontent.com/bogobogo/opensource2/master/openSourceIsAwesome.json"
const projectsData = [{
        "description" : "Declarative API for handling fluid user interactions with views at 60 FPS in React Native",
        "title": "React Native Interactable",
        "github": "https://github.com/wix/react-native-interactable",
        "AndroidVideoUrl": 'https://github.com/wix/react-native/blob/master/src/videos/react-interactable-android.mp4?raw=true',
        "IOSVideoUrl": 'https://github.com/wix/react-native/blob/master/src/videos/react-iphone-interactable.mp4?raw=true',
        "IOSDemoAppLink": "https://itunes.apple.com/us/app/react-native-interactions/id1209875831?mt=8",
        "Image": "",
        "poster":'https://github.com/wix/react-native/blob/master/src/img/react-native-interactable-poster.jpg?raw=true',
        "size" : "normal",
        "AndroidDemoAppLink": "https://play.google.com/store/apps/details?id=com.wix.interactions&hl=en"
    },
    {
        "description": "App-wide support for 100% native navigation with an easy cross-platform interface.",
        "title": "React Native Navigation",
        "github": "https://github.com/wix/react-native-navigation",
        "AndroidVideoUrl": 'https://github.com/wix/react-native/blob/master/src/videos/react-navigation-android.mp4?raw=true',
        "IOSVideoUrl": 'https://github.com/wix/react-native/blob/master/src/videos/react-navigation-iphone.mp4?raw=true',
        "IOSDemoAppLink": "",
        "Image": "",
        "poster":'https://github.com/wix/react-native/blob/master/src/img/react-native-navigation-poster.jpg?raw=true',
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    {
        "title": "Detox",
        "description": "Graybox E2E tests and automation library for mobile",
        "github": "https://github.com/wix/detox",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "as",
        "IOSDemoAppLink": "",
        "MacVideoUrl": 'https://github.com/wix/react-native/blob/master/src/videos/detox.mp4?raw=true',
        "Image": "",
        "size" : "big",
        "AndroidDemoAppLink": ""
    },
    {
        "title": "React Native Camera Kit",
        "description": "Advanced native camera control with pre-defined aspect ratio, crop and more",
        "github": "https://github.com/wix/react-native-camera-kit",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "s",
        "IOSDemoAppLink": "",
        "Image": "s",
        "poster": 'https://github.com/wix/react-native/blob/master/src/img/react-native-camera.jpg?raw=true',
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    ]

projectList.forEach(function(projectUrl){
    request({
    url: projectUrl,
    json: true
    }, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
        if ((((((body.title) && (body.description)) && body.title) && body.github) && body.size) && ((body.AndroidVideoUrl || body.IOSVideoUrl) || body.image)) {
            console.log(projectsData)
            projectsData.push(body)
        }
    }
})
})

module.exports = projectsData