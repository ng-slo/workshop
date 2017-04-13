# Practical part

**Before you start please check if you have all of the [prerequirements](https://github.com/ng-slo/workshop/tree/master/04-angular-cli#prerequirements) done.**

## Webpack
To be able to run Webpack, you have two choices, either globally install it with `npm install -g webpack` and than just write webpack in a folder that contains webpack.config.js, or install it locally, and run it via package.json scripts.


### Exercise 1
Create an empty folder, add webpack.config.js file, and than add another app.js file which will print `Hello World` in the console, than bundle it and output the result into a dist folder. At the end, run `node dist/app.js` and check the console.

### Exercise 2
Create another folder named src, which will have two js files which will export some function with the ES6 `export` that writes something in the console. Than, import these functions into the app.js file, rerun webpack and run dist/app.js

### Exercise 3
Try to use the HtmlPlugin for webpack. This is the first plugin that you will almost always use!
Repo and docs: [HtmlPlugin](https://github.com/jantimon/html-webpack-plugin)
### Exercise 4
Create index.html file which will be used as a template in the HtmlPlugin, and also change the title of the index.html via the htmlplugin configuration. At the end, add some custom html inside of the template and see what happens. At the end, run webpack, than `http-server .` into the dist folder
### Exercise 5
Turn all the javascript files into typescript, use ts-loader plugin, and run the app
Repo and docs [ts-loader](https://github.com/TypeStrong/ts-loader)

