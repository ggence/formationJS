const fs = require('fs');

// Déclaration
function ecrireDansUnFichierPromesse(nomDuFichier,texte) {
  return new Promise(function (resolve,reject) {
    fs.writeFile(nomDuFichier, texte, (err) => {
      if (err) {
        reject(err);
      }else {
        var msg = "The file has been saved!";
        resolve(msg)
      }
    });
  });
};


// Utilisation
function siErr (err) {
  console.error(err)
}

function siOk (msg) {
  console.log(msg)
}

ecrireDansUnFichierPromesse("message.txt","Salut").then(siOk,siErr);
