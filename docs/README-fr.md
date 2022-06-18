# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Ce package a été développé à partir de zéro par [Daniel Españadero](https://github.com/DanielEspanadero)._

_Ce projet est organisé par [Nuwe](https://nuwe.io/) et fait partie du challenge qualificatif pour la finale du hackathon en présentiel qui se tiendra le 30 juin au siège de la Croix-Rouge à Barcelone . Les exigences du défi peuvent être trouvées [ici](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Traductions 💬

_Ce fichier README est également disponible dans d'autres langues :_
- [Catalan](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Anglais](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)
- [Allemand](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Italien](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portugais](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Espagnol](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [Suédois](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Objectifs 🎯
_`Hackathon BCN Inclusive Coding` nous demande de répondre aux objectifs suivants :_

_✅ Tâche 1 → J'ai un point de terminaison qui peut convertir des fichiers à une seule colonne. - REMPLI_

_✅ Tâche 2 → J'ai un point de terminaison qui peut (ou le même que ci-dessus) convertir des fichiers multi-colonnes. - REMPLI_

_⚠️ Attention ! → La tâche 1 et la tâche 2 se trouvent dans le même point de terminaison `/csvtojson`, car elles détectent automatiquement si le fichier est à une seule colonne ou à plusieurs colonnes_

_✅ Tâche 3 → Les nombres renvoyés sont au format num/Int/double/float et non au format chaîne - COMPLETED_

_✅ Tâche 4 → Ajouter un test utilisant l'insomnie/Postman - TERMINÉ_


## Démarrage 🚀

_Ces instructions vous permettront d'obtenir une copie de travail du projet sur votre machine locale à des fins de développement et de test._


### Prérequis 📋

_Pour que le projet fonctionne correctement, il est recommandé d'avoir une série de programmes installés et correctement configurés :_
- [Visual Studio Code] (https://code.visualstudio.com/download)
- [Node.js et npm](https://nodejs.org/es/)


### Installation 🔧

_Lorsque vous avez cloné ce projet dans votre dépôt local, n'oubliez pas d'exécuter la commande suivante dans le terminal pour installer les dépendances et que tout fonctionne correctement :_
```
npm install
```


### Variables d'environnement .env 🪛

_Pour que le projet fonctionne correctement, vous devez activer les variables d'environnement, pour cela, vous devez créer un fichier avec le nom `.env` et entrer les données que vous avez dans le modèle `.config.env`_

![Démo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Commandes à exécuter ⌨️

_Une fois tous les programmes et dépendances nécessaires installés, lancez simplement la commande :_
```
npm init
```
_Ou vous pouvez également entrer la commande pour la version de développement._
```
npm run dev
```

## Comment cela marche-t-il?

_L'idée du projet est que lorsque vous téléchargez un fichier CSV, il est automatiquement converti au format JSON. Le chemin des fichiers CSV téléchargés est `src/uploads` et le chemin des fichiers transformés est `src/json`._
_Pour tester l'application avec postman, nous devons importer le fichier trouvé dans le chemin `postman`, pour ce faire, nous ouvrons postman et allons dans le chemin `file → import` et importons le fichier `CSVtoJSON.postman_collection.json`._

![Démo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Lorsque nous aurons importé le JSON dans postman, pour faire un POST dans la route `http://localhost:8080/csvtojson`, nous devrons le vérifier dans `body → form-data`, dans la section `key` il a le mot `csv ` et est en mode `Fichier`. Une fois cela fait, dans la section `value` nous pouvons télécharger notre fichier CSV._

![Démo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Points de terminaison 💻

_Pour mener à bien ce projet spécifique, je n'ai utilisé qu'un seul endpoint qui est `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Construit avec 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Langage de programmation utilisé.
* [Node.js](https://nodejs.org/es/docs/) - Environnement pour exécuter JavaScript côté serveur.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestionnaire de dépendances.
* [Multer](https://www.npmjs.com/package/multer) - Module pour télécharger des fichiers sur notre application.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Module pour transformer les fichiers CSV en JSON.

## Versionné 📌

_J'ai utilisé des versions sémantiques [SemVer](http://semver.org/) pour cette application._

## Auteur ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *L'ensemble du projet*

## Licence 📄

_Ce projet est sous licence MIT - voir le fichier [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) pour plus de détails._