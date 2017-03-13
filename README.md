### Wix Mobile Open Source

## About

This repository hosts the Wix mobile open source website. 
<br>
<br>
The production code is hosted in the gh-pages branch.
<br>
The source files are hosted in the master branch.

## Usage

if you wish to add your project: <br>
* create an "openSourceIsAwesome.json" file in your repo. It should have the following properties: <br>
   ```
   {
        "name": "your repository name" (required),    
        "description": "App-wide support for 100% native navigation with an easy cross-platform interface." (required),    
        "title": "React Native Navigation" (required),    
        "github": "https://github.com/wix/react-native-navigation" (required),    
        "AndroidVideoUrl": "https://yourandroidvideourl.com",(optional: if you want to add a video that was filmed on an android),    
        "IOSVideoUrl": "https://storage.googleapis.com/legati-app.appspot.com/react-native-interactable-720.mov",(optional: if you want to add a video that was filmed on iphone),    
        "IOSDemoAppLink": "link to your demo app on the app store", (optional: add if you have a demoapp on the app store),    
        "AndroidDemoAppLink": "link to your demo app on the play store" (optional: add if you have a demoapp on the app store),    
        "Image": "link to image" (required with dimensions 243 × 417, but only if you have no videos to display),    
    }
    ```
<br>
If you wish to make change to the *design* of the website:
* clone the repo
* make your changes
* run 'yarn deploy'.
* ??? 
* thats it.
