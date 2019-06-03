# Simple Express-React Starter Kit
This boilerplate is for building full stack javascript application with Express, Node and React.

## Getting started

#### Basic commands
1. Clone repository
`git clone https://github.com/martapa/full-stack-starter.git`
2. Go into the folder
`cd full-stack-starter`
3. Install all dependencies
`npm install`
4. Bundle files. This will create `./dist` folder in project directory
`npm run-script build`
5. Run your app
`npm run-script start:client`
App will automatically open in your browser [http://localhost:8080/](http://localhost:8080/).
6. Start your Server
`npm run-script start:server`

#### Some extras
To start over and clean your project.
`npm run clean`

To test the app.
`npm test`

## Folder structure

#### Client

* __client/src/index.html__ -file where jsx code is loaded in the `<div id=”root”>`. Id is important because it point to id from index.js file.
* __client/src/index.js__ -file that corresponds to html file. It tells that App component has to be loaded into html with `id="root"`.
* __client/src/App.js__ -main App component that will hold all other components.
.
* __client/src/App.test.js__ -simple App component test.
* __client/src/setupTests.js__ -file with Enzyme configuration.
* **__client/tests__** -folder with future Jest or Enzyme tests.

#### Server
* __server/server.js__ -basic Express server.

#### Configuration
* __package.json__ -list of node dependencies needed.
* __.babelrc__ -babel configuration file.
* __.webpack.config.js__ -simple webpack configuration file.

#### Other
* __dist__ -this folder will be created after running `npm build`. It stores bundled files

## More info

* This starter uses ESLint to ensure code consitency [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started).
