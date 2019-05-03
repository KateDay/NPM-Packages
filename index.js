var chalk = require("chalk");

var message = chalk.red.bold.underline.bgWhite("Hello ") + chalk.bgYellow.italic.green("World");
console.log(message);