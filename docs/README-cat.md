# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Aquest paquet ha estat desenvolupat des de zero per [Daniel Españadero](https://github.com/DanielEspanadero)._

_Aquest projecte està organitzat per [Nuwe](https://nuwe.io/) i forma part del repte classificatori per a la final del hackathon presencial que se celebrarà el 30 de juny a la seu de Creu Roja Barcelona. Els requisits del desafiament es poden trobar [aquí](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Traduccions 💬

_Aquest fitxer README també està disponible en altres idiomes:_
- [Spanish](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Francès](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [Alemany](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Italià](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portuguès](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Anglès](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)
- [Suec](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Gols 🎯
_`Hackathon BCN Inclusive Coding` ens demana complir els següents objectius:_

_✅ Tasca 1 → Tinc un punt final que pot convertir fitxers d'una sola columna. - COMPLETAT_

_✅ Tasca 2 → Tinc un punt final que pot (o el mateix de dalt) convertir fitxers de diverses columnes. - COMPLETAT_

_⚠️ Advertència! → La tasca 1 i la tasca 2 estan dins del mateix punt final `/csvtojson`, ja que detecta automàticament si el fitxer és d'una sola columna o de diverses columnes_

_✅ Tasca 3 → Els números tornats estan en format num/Int/double/float i no en format de cadena - COMPLETED_

_✅ Tasca 4 → Afegeix prova usant insomni/Postman - COMPLETAT_


## Començant 🚀

_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local per a fins de desenvolupament i prova.


### Pre requisits 📋

_Perquè el projecte funcioni correctament, es recomana tenir una sèrie de programes instal·lats i configurats adequadament:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)


### Instal·lació 🔧

_Quan hagis clonat aquest projecte al teu repositori local recorda executar la següent comanda a la terminal per instal·lar les dependències i que tot funcioni correctament:_
````
npm install
````


### Variables d'entorn .env 🪛

_Perquè el projecte funcioni correctament has d'habilitar les variables d'entorn, per això has de crear un fitxer amb el nom `.env` i introduir les dades que tens a la plantilla `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Comandes per executar ⌨️

_Una vegada que tots els programes i dependències necessaris estiguin instal·lats, simplement executeu l'ordre:_
````
npm init
````
_O també podeu introduir l'ordre per a la versió de desenvolupament._
````
npm run dev
````

## Com funciona això?

_La idea del projecte és que quan puges un fitxer CSV, es converteix automàticament a format JSON. La ruta dels fitxers CSV carregats és `src/uploads`, i la ruta dels fitxers transformats és `src/json`._
_Per provar l'aplicació amb postman hem d'importar l'arxiu que es troba a la ruta `postman`, per això obrim postman i anem a la ruta `arxiu → importar` i importem el fitxer `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Quan hàgim importat el JSON a postman, per fer un POST a la ruta `http://localhost:8080/csvtojson`, haurem de comprovar-ho a `body → form-data`, a l'apartat `key` té la paraula `csv ` i està en mode `File`. Un cop fet això, a la secció `valor` podem pujar el nostre arxiu CSV._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Punts finals 💻

_Per realitzar aquest projecte en concret només he fet servir un endpoint que és `/csvtojson`._
````
http://localhost:8080/csvtojson
````

## Construït amb 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Llenguatge de programació utilitzat.
* [Node.js](https://nodejs.org/es/docs/) - Entorn per executar JavaScript del costat del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependències.
* [Multer](https://www.npmjs.com/package/multer) - Mòdul per pujar arxius a la nostra app.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Mòdul per transformar fitxers CSV a JSON.

## Versionat 📌

_He utilitzat versions semàntiques [SemVer](http://semver.org/) per a aquesta aplicació._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Tot el projecte*

## Llicència 📄

_Aquest projecte està llicenciat sota la Llicència MIT - veure l'arxiu [LLICÈNCIA](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) per a més detalls._