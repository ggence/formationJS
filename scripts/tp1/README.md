# TP1: Découverte du langage

### JavaScript avec NodeJS

*Dans un fichier test.js*

1. Ecrire une fonction **puissance2** qui affiche et retourne le nombre d'entrée à la puissance 2 si le nombre est pair, sinon affiche et retourne le nombre entré en paramétre.
2. Ecrire un constructeur de **Espece** qui a un attribut publique ***.nbPattes*** (number) et 2 méthodes publiques ***.marcher*** et ***.voler***, les méthodes doivent afficher un message différent dans la console et ne rien retourner.
3. Instancier **Espece** dans **fourmie** et ecrire une fonction **changeNbPatte** (non méthode) qui change le nbPattes du instance de Espece.

*Testez votre script avec le code contenu dans le fichier scripts/tp1/test/nodejs_tp1.js*

4. Importer le module **lbbePrabi** (avec npm) puis afficher l'objet dans la console.
5. Utiliser LA méthode de **lbbePrabi** qui prend en argument un callback;
6. Faire une requete HTTP sur le port ***lbbePrabi.port*** de sa machine. (adresse ip pour test en local: 127.0.0.1 ou localhost).

7. Lire le fichier */etc/group*  avec **fs.readFile**, afficher l'erreur si il y en a une sinon afficher le résultat dans la console.



### JavaScript avec le navigateur

1. Dans votre éditeur créer une page HTML5 vide. (ex: index.html)
2. Ajouter la structure d'un [formulaire](https://www.w3schools.com/html/html_forms.asp) avec pour attributs **(action="http://localhost:8080" method="get")**
3. Ajouter au formulaire un **input (type="text" name:"prenom")**
4. Ajouter au formulaire un **input (type="text" name:"nom")**
5. Ajouter au formulaire un **input (type="submit" value:"GO")**
6. Lancer votre script NodeJS contenant **lbbePrabi**
7. Ouvrez la page avec votre navigateur, remplissez les champs et appuyer sur le bouton '*GO*'. Regarder l'URL de votre page.
8. Importer votre script test.js dans la page index.html

9. Afficher l'outil de développement du navigateur (F12 || Ctrl + j) et dans test.js commentez toute les lignes NodeJS.

10. Ajouter un titre **h2 (id="titre")** et modifiez son contenue de façon aléatoire à chaque fois que vous cliquez sur la page.

11. Ajouter le [code Q11 en Annexe ](#q11)à votre page index.html et corriger le pour requêter votre serveur NodeJS et afficher le contenue de la réponse dans **#titre**


#### Annexe:

**installer un paquet distant avec npm**
```shell

#shell
npm install nom_du_paquet
```

*NodeJs fournit plusieurs module par défault tel que http, net, process ou encore fs (voir [doc](https://nodejs.org/dist/latest-v6.x/docs/api/)).*
*Pour les utiliser nul besoin de npm*

**Utiliser un module dans un fichier NodeJs**
```javascript
//javascript
const http = require('http');
```

**<a name="q11"></a> Code Q11**
```javascript

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
         if (xmlhttp.status == 200) {
             document.getElementById('toijijoi').innerHTML = xmlhttp.responseText;
         }
         else if (xmlhttp.status == 400) {
            alert('There was an error 400');
         }
         else {
             alert('something else other than 200 was returned');
         }
      }
  };

  xmlhttp.open('GET', 'http://google.fr', true);
  xmlhttp.send();
  ```
