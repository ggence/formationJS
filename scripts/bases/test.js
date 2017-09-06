
var a;
a = "bob";
a += a;
var n = 12;
n = 0.13;
var v;
console.log(v)


function direBonjour(toto) {
    
    return function () {
      console.log("Bonjour" + toto);
    }
    
}

var test1 = "5" == 5;
var test2 = "5" === 5;
var test3 = test1 || test2;

if (true || false) {

} else {

}

var expression = "a";
switch (expression) {
  case "a":
  case "b":
    console.log("c'est bien a ou b");
    break;
  case "c":
    console.log("c");
  default:
    console.log("default");

}

setTimeout( direBonjour("bob"), 10000);

setInterval( 
  function () { 
    console.log("Je reviens dans 3 secondes"); 
  }, 3000);


function Eleve(prenom, nom) {

    this.chanter = function (argument) {
      console.log("joijoi");
    }

    this.prenom = prenom;
    this.nom = nom;
    this.salutation = function() {
        this.chanter();
        console.log("Bonjour je suis " + this.prenom + " " + this.nom);
    }
}

var eleve1 = new Eleve("Bob", "DYLAN");
eleve1.salutation();
eleve1.chanter();

console.log(eleve1)

var ajd = new Date();
console.log(ajd.toGMTString());


var array = []
for (var i = 0; i < 10; i++) {
  array.push(Math.random());
}

array.forEach(function (a,b) {
  console.log(a,b);
});

