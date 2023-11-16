function factorielle(num) {
  if (num === 0 || num === 1) {
    // console.log("on est dans if")
    return 1;
  } else {
    // console.log("on est dans else")
    return num * factorielle(num - 1);
  }
}

console.log("Question posé : De quel nombre veux-tu calculer la factorielle ?");
let facto = prompt("De quel nombre veux-tu calculer la factorielle ?");
if(facto) {
  let result = factorielle(`${Number(facto)}`);
console.log(`Le résultat de la factorielle de ${facto} est : ${result}`);
} else {
  console.log("Dommage tu ne veux rien calculer");
}














