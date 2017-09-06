function metAuCarre (x) {
	x.valeur = Math.sqrt(x.valeur);
}

var z = {valeur: 12};

console.log(z);

metAuCarre(z);

console.log(z)