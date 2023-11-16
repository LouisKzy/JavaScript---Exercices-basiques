function sayHello() {
  console.log("Bonjour monde");
}
sayHello();

function sayHelloPrenom(string) {
  console.log(`Bonjour ${string} !`);
}
let prenom = prompt("Quel est ton prénom ?");
if (prenom === "") {
  console.log("Dommage tu n'as pas de prénom ( belle technique de pensée par lalaine)");
} else {
  sayHelloPrenom(prenom);
}
