var chien =
  nom : "Scoubidou",
  poil : true,
  age : 4
}

chien.getAge = function () {
  var ageChien = this.age * 7;
  console.log("J'ai "+ ageChien + " ans");
  return ageChien;
}

console.log(chien);
chien.getAge();
