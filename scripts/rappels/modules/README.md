# StarWarsRequestPromises

Retourne quelques personnages de StarWars

## Usage

Before use don't forget to install dependencies
```shell
npm install

```

In your JavaScript file:

```JavaScript
const swr = require('/path/to/starWarsRequest.js');

swr.hommes()
.then(function (response) {
  //Utilisation de response
},function (err) {
  //Utilisation de erreur
});

```

## API

**swr.hommes()**
return *Promise* with array of men charaters names when success, else an error

**swr.femmes()**
return *Promise* with array of women charaters names when success, else an error

**swr.genreInconnue()**
return *Promise* with array of unknown gender charaters  names when success, else an error

**swr.grands()**
return *Promise* with array of tall charaters names when success, else an error

**swr.petits()**
return *Promise* with array of small charaters names when success, else an error

**swr.changeNumPage(n)**
Change num page API

**swr.recupPageCourrante()**
retun current num page
