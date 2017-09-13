function puissance2(n) {
  var result;
  if(n%2 === 0){
    result = Math.pow(n,2);
  }else {
    result = n;
  }
  return result;
}

function puissance2(n) {
  if(n%2 === 0){
    return Math.pow(n,2);
  }else {
    return n;
  }
}

function puissance2(n) {
  return n%2 === 0 ? n*n : n;
}


function Espece(nbPattes) {
	this.nbPattes = nbPattes;
	this.marcher = function () {
		console.log("Je marche");
	}
	this.voler = function () {
		console.log("Je vole");
	}
}

var fourmie = new Espece(10);

function changeNbPatte(espece,n) {
  espece.nbPattes = n;
}

changeNbPatte(fourmie,6);


if(puissance2){
  console.log("Test puissance2:")
  console.log(puissance2(4) === 16);
  console.log(puissance2(5) === 5);
  console.log(puissance2(0) === 0);
}

if(Espece){
  console.log("Test Espece:")
  var gibbon = new Espece(4);
  console.log(typeof gibbon.nbPattes !== undefined )
  console.log(typeof gibbon.marcher !== undefined )
  console.log(typeof gibbon.voler !== undefined )
  console.log(gibbon.marcher() === undefined )
  console.log(gibbon.voler() === undefined )
}

if(fourmie){
  console.log("Test fourmie:")
  console.log(fourmie instanceof Espece)
}

if(changeNbPatte && Espece){
  console.log("Test changeNbPatte:")
  var araneae = new Espece(4);
  changeNbPatte(araneae,8);
  console.log(araneae.nbPattes === 8)
}

// // npm install lbbeprabi
// const lbbeprabi = require('lbbeprabi');

// console.log(lbbeprabi);
// lbbeprabi.creerServeur(function (a,b,c) {
//   console.log(a,b,c);
//   console.log("bonjour!");
// })

// curl localhost:8080
// avec le navigateur

// Pas besoin d'installer de module

// const fs = require('fs');
// // https://nodejs.org/en/docs/
// fs.readFile('/etc/grogeggeup','utf8', (err, data) => {
//   if (err) {
//     throw err;
//     console.error(err)
//   }
//   console.log(data);
// });
