# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Detta paket har utvecklats från grunden av [Daniel Españadero](https://github.com/DanielEspanadero)._

_Detta projekt organiseras av [Nuwe](https://nuwe.io/) och är en del av kvalificeringsutmaningen till finalen i det ansikte mot ansikte hackathon som kommer att hållas den 30 juni på Röda Korsets högkvarter i Barcelona . Utmaningskraven finns [här](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Översättningar 💬

_Denna README-fil är även tillgänglig på andra språk:_
- [katalanska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [franska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [tyska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [italienska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portugisiska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [spanska](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [engelsk](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)

## Mål 🎯
_`Hackathon BCN Inclusive Coding` ber oss uppfylla följande mål:_

_✅ Uppgift 1 → Jag har en slutpunkt som kan konvertera filer med en kolumn. - FILLED_

_✅ Uppgift 2 → Jag har en slutpunkt som kan (eller samma som ovan) konvertera filer med flera kolumner. - FILLED_

_⚠️ Varning! → Uppgift 1 och uppgift 2 finns inom samma `/csvtojson`-slutpunkt, eftersom den automatiskt upptäcker om filen är en kolumn eller multi-column_

_✅ Uppgift 3 → Siffror som returneras är i num/Int/double/float-format och inte i strängformat - COMPLETED_

_✅ Uppgift 4 → Lägg till test med sömnlöshet/Postman - COMPLETED_


## Börjar 🚀

_De här instruktionerna låter dig få en arbetskopia av projektet på din lokala dator för utvecklings- och testsyften._


### Förutsättningar 📋

_För att projektet ska fungera korrekt rekommenderas det att ha en serie program installerade och korrekt konfigurerade:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js och npm](https://nodejs.org/es/)


### Installation 🔧

_När du har klonat det här projektet i ditt lokala arkiv kom ihåg att köra följande kommando i terminalen för att installera beroenden och att allt fungerar korrekt:_
```
npm install
```


### Miljövariabler .env 🪛

_För att projektet ska fungera korrekt måste du aktivera miljövariablerna, för detta måste du skapa en fil med namnet `.env` och ange den data du har i mallen `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Kommandon att köra ⌨️

_När alla nödvändiga program och beroenden är installerade, kör helt enkelt kommandot:_
```
npm init
```
_Eller så kan du också ange kommandot för utvecklingsversionen._
```
npm run dev
```

## Hur fungerar detta?

_Idén med projektet är att när du laddar upp en CSV-fil konverteras den automatiskt till JSON-format. Sökvägen till de uppladdade CSV-filerna är `src/uploads`, och sökvägen till de transformerade filerna är `src/json`._
_För att testa applikationen med postman måste vi importera filen som finns i `postman`-sökvägen, för att göra detta öppnar vi postman och går till `fil → import`-sökvägen och importerar filen `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_När vi har importerat JSON till postman, för att göra en POST i rutten `http://localhost:8080/csvtojson`, måste vi kontrollera den i `body → form-data`, i `key`-sektionen har ordet `csv ` och är i `Fil`-läge. När detta är gjort kan vi ladda upp vår CSV-fil i avsnittet "värde"._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Slutpunkter 💻

_För att genomföra detta specifika projekt har jag bara använt en slutpunkt som är `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Byggd med 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programmeringsspråk som används.
* [Node.js](https://nodejs.org/es/docs/) - Miljö för att köra JavaScript på serversidan.
* [Express](https://www.npmjs.com/package/express) - node.js ramverk.
* [NPM](https://www.npmjs.com/) – Beroendehanterare.
* [Multer](https://www.npmjs.com/package/multer) - Modul för att ladda upp filer till vår app.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Modul för att transformera CSV-filer till JSON.

## Versionerad 📌

_Jag har använt semantiska versioner [SemVer](http://semver.org/) för den här appen._

## Författare ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Hela projektet*

## Licens 📄

_Detta projekt är licensierat under MIT-licensen - se filen [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) för mer information._