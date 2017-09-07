# TP1: Découverte du langage

*TODO: corriger fautes d'orthographe*

### JavaScript avec NodeJS

*Dans un fichier test.js*

1. Écrire une fonction **puissance2** qui affiche et retourne le paramètre (number) entré à la puissance 2 si le nombre est pair. Sinon affiche et retourne le paramètre sans modification.
2. Écrire un constructeur de **Espece** qui a un attribut publique ***.nbPattes*** (number) et 2 méthodes publiques ***.marcher*** et ***.voler***, les méthodes doivent afficher un message différent dans la console et ne rien retourner.
3. Instancier **Espece** dans **fourmie** et écrire une fonction **changeNbPatte** (non méthode) qui change le nbPattes d'une instance de **Espece**.

*Tester votre script avec le code contenu dans le fichier [scripts/tp1/test/nodejs_tp1.js](https://github.com/ggence/formationJS/blob/master/scripts/tp1/test/nodejs_tp1.js) *

4. Importer le module **lbbeprabi** (avec npm) puis afficher l'objet dans la console.
5. Utiliser LA méthode de **lbbeprabi** qui prend en argument un callback;
6. Faire une requête HTTP sur le port ***lbbeprabi.port*** de sa machine. (adresse ip pour test en local: 127.0.0.1 ou localhost).

7. Lire le fichier */etc/group*  avec **fs.readFile**. Afficher l'erreur si il y en a une. Sinon afficher le résultat dans la console.


### JavaScript avec le navigateur

1. Dans l'éditeur créer une page HTML5 vide. (exemple: index.html)
2. Ajouter la structure d'un [formulaire](https://www.w3schools.com/html/html_forms.asp) avec pour attributs **(action="http://localhost:8080" method="get")**
3. Ajouter au formulaire un **input (type="text" name:"prenom")**
4. Ajouter au formulaire un **input (type="text" name:"nom")**
5. Ajouter au formulaire un **input (type="submit" value:"GO")**
6. Lancer votre script NodeJS contenant **lbbeprabi**
7. Ouvrez la page avec votre navigateur, remplissez les champs et appuyer sur le bouton '*GO*'. Regarder l'URL de votre page.
8. Importer votre script test.js dans la page index.html

9. Afficher l'outil de développement du navigateur (F12 || Ctrl + j) et dans test.js commentez toute les lignes NodeJS.

10. Ajouter un titre **h2 (id="titre")** et modifiez son contenue de façon aléatoire à chaque fois que vous cliquez sur la page.

11. Ajouter le [code Q11 en Annexe ](#q11)à votre page index.html et corriger le pour requêter votre serveur NodeJS. Puis afficher le contenue de la réponse dans **#titre**.

12. Dans votre dossier projet, vous avez maintenant un dossier node_modules.
Importer dans votre script le fichier node_modules/lbbeprabi/dist/lbbeprabi.js dans votre page html.

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
