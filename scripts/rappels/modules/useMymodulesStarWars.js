const chalk = require('chalk');
const swr = require('./starWarsRequest.js');


swr.changeNumPage(3);

swr.hommes()
.then(function functionName(response) {
  console.log(chalk.bgMagenta.bold(response));
},function functionName(err) {
  console.error(err);
});

swr.femmes()
.then(function functionName(response) {
  console.log(chalk.bgBlue.bold(response));
},function functionName(err) {
  console.error(err);
});
