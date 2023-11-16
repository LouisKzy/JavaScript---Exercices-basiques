function triangleM(n) {
  let result = "";
  let space = " "
  for (let i = 1; i <= n; i++) {
    for (let k = n; k > i - 1; k--) {
      result += space
    } for (let j = 0; j < i; j++) {
      result += "💩";
    }
    result += " \n"
  }
  return result
}
function triangle(n) {
  let result = "";
  let space = " "
  for (let i = 1; i <= n; i++) {
    for (let k = n; k > i - 1; k--) {
      result += space
    } for (let j = 0; j < i; j++) {
      result += "#";
    }
    result += " \n"
  }
  return result
}
let numberFloorM = prompt("Combien d'étage tu veux à ta pyramide de merde.(Tu la mérite tu m'as fait faire une pyramide déja alors rale pas.)");
if (numberFloorM) {
  console.log("PYRAMIDE DE MERDE SUR TOI");
  console.log(triangleM(numberFloorM));
} else {
  console.log("Bon choix, pas de pyramide de merde pour toi.");
  let numberFloor = prompt("Ok pas une pyramide de merde mais une normal alors.. Combien d'étages ?");
  console.log(triangle(numberFloor))
}
