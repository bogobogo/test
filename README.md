### Wix Mobile Open Source

## About

This repository hosts the Wix mobile open source website.
The minified code that runs the website can be found in the gh-pages branch.
The source files are in the master branch.

## Usage

if you wish to add your project:
1) create an "openSourceIsAwesome.json" file in your repo. It should have the following properties:
   {
        "name": "your repository name" (required),
        "description": "App-wide support for 100% native navigation with an easy cross-platform interface." (required),
        "title": "React Native Navigation" (required),
        "github": "https://github.com/wix/react-native-navigation" (required),
        "AndroidVideoUrl": "https://yourandroidvideourl.com",(optional: if you want to add a video that was filmed on an android)
        "IOSVideoUrl": "https://storage.googleapis.com/legati-app.appspot.com/react-native-interactable-720.mov",(optional: if you want to add a video that was filmed on iphone)
        "IOSDemoAppLink": "link to your demo app on the app store", (optional: add if you have a demoapp on the app store)
        "AndroidDemoAppLink": "link to your demo app on the play store" (optional: add if you have a demoapp on the app store)
        "Image": "link to image" (required, but only if you have no videos to display)    
    }

If you wish to make change to the *design* of the website:
1) clone the repo
2) make your changes
3) run 'yarn deploy'.
4) ??? 
5) thats it.
