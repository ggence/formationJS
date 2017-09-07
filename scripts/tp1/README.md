# TP1: Découverte du langage

### JavaScript avec NodeJS



1. Ecrire une fonction **puissance2** qui affiche et retourne le nombre d'entrée à la puissance 2 si le nombre est pair, sinon affiche et retourne le nombre entré en paramétre.
2. Ecrire un constructeur de **Espece** qui a un attribut publique ***.nbPattes*** (number) et 2 méthodes publiques ***.marcher*** et ***.voler***, les méthodes doivent afficher un message différent dans la console et ne rien retourner.
3. Instancier **Espece** dans **fourmie** et ecrire une fonction **changeNbPatte** (non méthode) qui change le nbPattes du instance de Espece.
```JavaScript
//Appel de la fonction:
changeNbPatte(gibbon,6);
```
4. Importer le module **lbbePrabi** (avec npm) puis afficher l'objet dans la console;
5. Utiliser la méthode ***.creerServeur*** du **lbbePrabi** qui prend en argument un callback;
6. Faire une requete HTTP sur le port 8080 de sa machine. (adresse ip pour test en local: 127.0.0.1 ou localhost) et décrire ce qu'il se passe.
7. Lire le fichier */etc/group*  avec **fs.readFile**, afficher l'erreur si il y en a une sinon afficher le résultat dans la console.



### JavaScript avec le navigateur

//TODO

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

Idée: faire des tests
