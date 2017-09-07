
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
