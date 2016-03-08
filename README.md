# ForkliftJS


## Usage instructions
* Install ForkliftJS CLI globally `npm install -g forkliftjs-cli` (https://github.com/ForkliftJS/forkliftjs-cli)
* Install ForkliftJS locally into your project `npm install --save-dev forkliftjs` (It is recommended to pick a ForkliftJS Crate [A crate is a ForkliftJS starter project tailored for a specific environment/framework] instead)

## Replace the following placeholders in your package.json, bower.json and yuidoc.json
Placeholder | Description | Example
------------ | ------------- | -------------
_PROJECT_NAME_ | The name of your project | Tooling
_PROJECT_DESCRIPTION_ | Short description of your project | Bare starter project equipped with modular tasks
_REPO_URL_ | URL to your project's git repository | https://github.com/nvanmeurs/tooling.git
_AUTHOR_ | Author of your project in NAME <EMAIL> format | Nicky van Meurs \<nvmeurs@outlook.com\>
_LICENSE_ | Your project's license | MIT or GPL
0.0.0 | Your project's version | 0.1.12 (see http://semver.org/ for versioning standard)

## Commands
### Basic commands
Command | Description
------------ | -------------
forklift lint | Lint the project's JavaScript sources (See usage tips)
forklift serve | Serve development version of the project [see: serveDev]
forklift build | Build documentation and the production version of the project [see: buildDocs + BuildProd]
forklift docs | Generates the documentation, then serves the generated documentation * [see: buildDocs + serveDocs]
forklift test | Run the tests for the project using Karma (Languages: Mocha + Chai)
forklift clean | Cleans the docs/api and dist folders [see: cleanDocs + cleanDist]
forklift cleanDocs | Cleans the docs/api folder
forklift cleanDist | Cleans the dist folder
forklift version | Prints the version of the locally installed ForkliftJS

### Advanced commands
Command | Description
------------ | -------------
forklift buildDev | Build the development version of the project
forklift serveDev | Serve the development build of the project on the webpack development server **
forklift buildProd | Build the production version of the project
forklift serveProd | Serve the production build of the project on a static HTTP server **
forklift buildDocs | Generate documentation for the project using YUIDoc
forklift serveDocs | Serve the generated documentation on a static HTTP server *
forklift cleanBower | Cleans the bower folder
\* = View documentation at http://localhost:3000/api

\*\* = View served project at http://localhost:8080/**

## Usage tips
* Use NPM to install libraries over Bower for usage and performance benefits
* Install an ESLint plugin into your IDE of choice (it read the rules from .eslintrc)
* Install an EditorConfig plugin into your IDE of choice (it will make sure the IDE behaves in the same way for all project members)

## Documentation below this line is considered outdated.

## Features
- [x] Compiles LESS/SASS/Stylus
- [x] Import (preprocessed) stylesheets into modules
- [x] Import JSON files into modules (returns JSON Object)
- [x] Import Image files into stylesheet and HTML (Returns data blob or url to file based on the file size)
- [x] Compiles ES2015/React to ES5
- [x] ES2015/ES5 linting using ESLint
- [x] Generates sourcemaps (using eval in development, using sourcemap files during production)
- [x] Uglifies scripts
- [x] Development server that watches the filesystem for changes and replaces modules on the fly
- [x] Intregated Mocha and Chai with Karma as test runner
- [x] YUIDoc integration
- [x] Add docs to repo's wiki (see tooling_docs folder)
- [x] Tasks using simple NodeJS scripts (no grunt/gulp)
- [x] Optimize extraction of modules that are required by two or more other modules

## To do
- [ ] Add JSCS for JavaScript code style checking (Code style open for discussion)
- [ ] Discuss ESLint rules
- [ ] Add CSS/SASS/Stylus/LESS linting
- [ ] Add CSS minification
- [ ] Add HTML linting
- [ ] Add HTML minification
- [ ] Add framework specific examples / starter projects
- [ ] Integrate Protractor.js
- [ ] Add remaining tasks as issues to the repo

## How do I structure my project?
### You are free to structure your project in anyway you want as long as you have
* docs/ (contains the project's documentation)
	* custom/ (OPTIONAL hook in YUIDoc's main template)
	* themes/ (YUIDoc themes)
* src/ (contains the project's source code)
  * vendor/ (contains vendor libraries that are not available on NPM nor Bower)
  * index.html (HTML entrypoint / Main template)
  * main.js (JavaScript entrypoint / Main module)
  * main.development.js (Development exclusive logic)
  * main.production.js (Production exclusive logic)
* tasks/ (contains the tooling's tasks i.e. serve, build)
* .babelrc (Babel settings)
* .bowerrc (Bower settings)
* .editorconfig (IDE settings)
* .eslintignore (ESLint ignored files)
* .eslintrc (ESLint linting rules)
* .gitattributes (Git settings)
* .gitignore (Git ignored files/folders)
* bower.json (Bower dependencies)
* karma.conf.js (Test runner settings)
* package.json (Project settings)
* run.js (Task runner script)
* spec.bundle.js (Webpack bundle for running tests)
* webpack.config.dev.js (Webpack development configuration)
* webpack.config.prod.js (Webpack production configuration)
* yuidoc.json (YUIDoc settings)

### Example (Out-of-date)
![How to structure my project](https://raw.githubusercontent.com/just-bi/tooling/master/tooling_docs/Structure.png)

## How do I work with modules?
### Exporting
![How to export modules](https://raw.githubusercontent.com/just-bi/tooling/master/tooling_docs/Exports.png)

### Importing
![How to import modules](https://raw.githubusercontent.com/just-bi/tooling/master/tooling_docs/Imports.png)

### Reference
Topic | URL
------------ | -------------
ES2015 cheatsheet | https://github.com/DrkSephy/es6-cheatsheet
Mocha reference | https://mochajs.org/
Chai reference | https://chaijs.com/

## Questions?
Feel free to ask questions on our Gitter channel!

## Maintainers
Nicky van Meurs (@nvanmeurs)
