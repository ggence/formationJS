
//Déclaration d'une fonction avec callback et 1 param
function salutation(nom,remerciement_cb) {
  var personne2 = "Alice";
  console.log("Bonjour "+nom);
  remerciement_cb(personne2);
}

// Utilisation
remerciement = function (nom) {
  console.log("De rien, "+nom)
};

salutation("bob",remerciement);

// OU
//Utilisation de la fonction avec callback avec une fonction anonyme
// var personne1 = "Bob";
// salutation(personne1,function (nom) {
//   console.log("De rien, "+nom)
// });
