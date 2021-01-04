// function sayHello() {
//     let header = document.querySelector("#greeting");
//     let hello = ("<h1> hola mundo </h1>");
//     header.innerHTML = hello;
// }
// sayHello();

//so this line now tells the compiler to look at file named
require('./another.js');
require('../css/app.css');
// require("style-loader!css-loader!../css/app.css"); We shorten this statement and move the loader into our webpack.config.js

//don't need to speify paths for node_modules. you can specify how to find module in the webpack.config.js
// import $ from 'jquery';
// import moment from 'moment';

// console.log(moment().add(7, 'days').format ());