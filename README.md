# 2020 JS for WP Workshop

In this workshop we learn how to build a small vanilla JavaScript application. We then connect it to the WordPress REST API. From there we import our application into WordPress as a plugin. Finally we refactor our application to run on React rather than vanilla JavaScript.

## Part 1 - JavaScript

1. Start with the `01-javascript-starter` folder
2. Follow along to add a button to the page
3. Then call a function when the button is clicked
4. Install and Activate the `02-likes-starter` plugin on your WordPress site
5. Have the button update the likes on your WordPress site via the REST API
6. Display the like count in the button
7. Connect to local storage to prevent voting multiple times

## Part 2 - WordPress

1. Go over the code for the `02-likes-starter` plugin. Focus on JS and CSS enqueuing, metabox setup and REST API customization
2. Setup localize script to provide `postID` and likes `count`
3. Import and modify code from vanilla JS example to work in WordPress

## Part 3 - React

1. Install and activate the `03-likes-react-starter` plugin
2. Look over the code. Focus on React dependency, package.json
3. Install and setup WP Scripts
4. Convert the plugin to React
