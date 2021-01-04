function sayHello() {
    let header = document.querySelector("#greeting");
    let hello = ("<h1> Hell World 2020! <br />Hola Mundo, ayudanos! <br />Bonjour le monde! Hallo Welt! </h1><hr />");
    header.innerHTML = hello;
}
//sayHello(); don't need this new is below
module.exports = sayHello();