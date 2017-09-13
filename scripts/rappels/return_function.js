function createPuissanceNFonction(exp) {
  var result = function (n) {
    return Math.pow(n,exp);
  }
  return result;
}

var puissance2 = createPuissanceNFonction(2);

console.log(puissance2(8));
