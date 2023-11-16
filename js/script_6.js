
const cordonMap = {
  'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine', 'AGU': 'Sérine', 'AGC': 'Sérine',
  'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
  'UUA': 'Leucine', 'UUG': 'Leucine',
  'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
  'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AGA': 'Arginine', 'AGG': 'Arginine',
  'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
};

function translateArn(arn) {
  let cordons = [];
  for (let i = 0; i < arn.length; i += 3) {
    var cordon = arn.slice(i, i + 3);
    if (cordonMap[cordon]) {
      cordons.push(cordonMap[cordon]);
    }
  }
  return cordons.join('-');
}
console.log(translateArn('CCGUCGUUGCGCUACAGC'));
console.log(translateArn('CCUCGCCGGUACUUCUCG'));
console.log(translateArn('UUACGCAGUAGA'));