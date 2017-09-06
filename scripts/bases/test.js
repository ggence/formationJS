var a;
a = "bob";
a += a;
var n = 12;
n = 0.13;
var v;
console.log(v)


function direBonjour() {
  console.log("Bonjour");
}


function Eleve(prenom,nom) {
    this.prenom = prenom;
    this.nom = nom
    this.salutation = function () {
      console.log("Bonjour je suis "+ this.prenom + " " + this.nom);
    }
}

var eleve1 = new Eleve("Bob","DYLAN");
eleve1.salutation();

var ajd = new Date();
console.log(ajd);

"5" == 5
"5" === 5

if (true || false) {

} else {

}

var expression = "a";
switch (expression) {
  case "a":
  case "b":

    break;
  case "c":
  default:

}

var array = []
for (var i = 0; i < 10; i++) {
  //array[i] = Math.random();
  array.push(Math.random());
}

console.log(array);
