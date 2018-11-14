# Gulp Boilerplate

Gulp-based boilerplate for static websites where Javascript is used for DOM manipulation, form validation etc.

## Installation

Make sure that you have installed:

* [Node.js](https://nodejs.org/en/)
* [Gulp](https://gulpjs.com) npm install gulp -g 

Using terminal/command line move into project directory and run `npm install` to install dependencies.

## Usage

`gulp start` will create the following structure:
```
├── src
│   ├── scss
│   │   ├── helpers
│   │   ├── vendors
│   │   ├── base
│   │   ├── layout
│   │   ├── components
│   │   ├── pages
│   │   ├── themes
│   │   └── main.scss
│   ├── js
│   │   └── main.js
│   ├── templates
│   │   ├── includes
│   │   │   └── head.pug
│   │   ├── pages
│   │   └── index.pug
│   └── assets
│   │   └── images
├── tmp
├── dist
└── .gitignore
```

`gulp work` is the main development task. It will do a few things:
1. Compile Sass and Pug into CSS and HTML and put them into /tmp folder creating the following structure:
```
├── tmp
│   ├── css
│   │   └── main.css
│   ├── js
│   │   └── main.js
│   ├── pages
│   ├── assets
│   │   └── images
│   └── index.html
```
2. Create server using this directory as a base folder and refresh the browser window
3. Repeat above on every saved file with `.js / .pug / .scss` extension in /src folder

`gulp build` is used to make production folder with the same structure as with `gulp work`. It will also perform the following tasks:
1. Compile Sass into CSS, prefix, minify and put it into /dist/css folder

// todo

<!-- src — source files, pre-processed, un-minified.
tmp — development files, pre-processed, un-minified. The directory where you will be running the web server.
dist — production files, processed, minified. -->