// //const fs= require('fs')// /*old method of installing*/
// import chalk from 'chalk'; 
// // console.log(chalk.green('hello world'));  //new method of installing
// console.log(chalk.black.bgBlack.bold('Hello!'));
import validator from 'validator';
import chalk from 'chalk';
// var email ='test@gmail.com'
// console.log(validator.isEmail(email))
// email ='test@'
// console.log(validator.isEmail(email))

var password ='password';
console.log(validator.isStrongPassword(password))