const request = require('request');
const rp = require('request-promise');
const API_URL = "https://swapi.co/api/people/";

const GRAND_SEUIL = 180;
const GENRE_HOMME = "male";
const GENRE_FEMME = "female";
const GENRE_INCONNU = "n/a";
const MAX_PAGE = 9;

var pageNb = 1;
var url = API_URL + "?page=" + pageNb;


function recupPageCourrante() {
  return pageNb;
}

function changeNumPage(n) {
  if(n > MAX_PAGE) throw "Page max atteinte"
  url = API_URL + "?page=" + n;
}

function nomDesGrands() {
  return new Promise(function(resolve, reject) {
    rp(url)
    .then(function (response) {
        response = JSON.parse(response);
        var result = response.results;
        var grands = result.filter(function (e) {
          return e.height >= GRAND_SEUIL;
        })
        var noms = grands.map(function (e) {
          return e.name;
        });
        resolve(noms);
    })
    .catch(function (err) {
        console.error(err);
        reject(err);
    });
  });
}

function nomDesPetits() {
  return new Promise(function(resolve, reject) {
    rp(url)
    .then(function (response) {
        response = JSON.parse(response);
        var result = response.results;
        var grands = result.filter(function (e) {
          return e.height < GRAND_SEUIL;
        })
        var noms = grands.map(function (e) {
          return e.name;
        });
        resolve(noms);
    })
    .catch(function (err) {
        console.error(err);
        reject(err);
    });
  });
}

function nomDesHommes() {
  return new Promise(function(resolve, reject) {
    rp(url)
    .then(function (response) {
        response = JSON.parse(response);
        var result = response.results;
        var grands = result.filter(function (e) {
          return e.gender === GENRE_HOMME;
        })
        var noms = grands.map(function (e) {
          return e.name;
        });
        resolve(noms);
    })
    .catch(function (err) {
        console.error(err);
        reject(err);
    });
  });
}

function nomDesFemmes() {
  return new Promise(function(resolve, reject) {
    rp(url)
    .then(function (response) {
        response = JSON.parse(response);
        var result = response.results;
        var grands = result.filter(function (e) {
          return e.gender === GENRE_FEMME;
        })
        var noms = grands.map(function (e) {
          return e.name;
        });
        resolve(noms);
    })
    .catch(function (err) {
        console.error(err);
        reject(err);
    });
  });
}

function nomDesGenreInc() {
  return new Promise(function(resolve, reject) {
    rp(url)
    .then(function (response) {
        response = JSON.parse(response);
        var result = response.results;
        var grands = result.filter(function (e) {
          return e.gender === GENRE_INCONNU;
        })
        var noms = grands.map(function (e) {
          return e.name;
        });
        resolve(noms);
    })
    .catch(function (err) {
        console.error(err);
        reject(err);
    });
  });
}

module.exports = {
  grands : nomDesGrands,
  petits : nomDesPetits,
  hommes : nomDesHommes,
  femmes : nomDesFemmes,
  genreInconnue : nomDesGenreInc,
  pageCourante : recupPageCourrante,
  changeNumPage : changeNumPage
};
