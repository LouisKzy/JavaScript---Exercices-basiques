function sayHello() {
  console.log("Bonjour monde");
}
sayHello();

function sayHelloPrenom(string) {
  console.log(`Bonjour ${string} !`);
}
let prenom = prompt("Quel est ton prénom ?");
sayHelloPrenom(prenom);