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
├── app
│   ├── css
│   │   ├── **/*.css
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── js
│   │   ├── **/*.js
│   └── partials/template
├── dist (or build)
├── node_modules
├── bower_components (if using bower)
├── test
├── Gruntfile.js/gulpfile.js
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore
```

├── app
│   ├── css
│   │   ├── **/*.css
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── js
│   │   ├── **/*.js
│   └── partials/template
├── dist (or build)
├── node_modules
├── bower_components (if using bower)
├── test
├── Gruntfile.js/gulpfile.js
├── README.md
├── package.json
├── bower.json (if using bower)
└── .gitignore

```
gulp start
```
Starts web server 
```
gulp work
```

```
gulp build
```

src — source files, pre-processed, un-minified.
tmp — development files, pre-processed, un-minified. The directory where you will be running the web server.
dist — production files, processed, minified.