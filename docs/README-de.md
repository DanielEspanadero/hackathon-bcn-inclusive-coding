# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Dieses Paket wurde von [Daniel Españadero](https://github.com/DanielEspanadero) von Grund auf neu entwickelt._

_Dieses Projekt wird von [Nuwe](https://nuwe.io/) organisiert und ist Teil der Qualifikationsherausforderung für das Finale des persönlichen Hackathons, der am 30. Juni in der Zentrale des Roten Kreuzes in Barcelona stattfindet. Die Challenge-Anforderungen finden Sie [hier](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Übersetzungen 💬

_Diese README-Datei ist auch in anderen Sprachen verfügbar:_
- [Katalanisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Französisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [Englisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)
- [Italienisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portugiesisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Spanisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [Schwedisch](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)


## Tore 🎯

_`Hackathon BCN Inclusive Coding` fordert uns auf, die folgenden Ziele zu erreichen:_

_✅ Aufgabe 1 → Ich habe einen Endpunkt, der einzelne Spaltendateien konvertieren kann. - GEFÜLLT_

_✅ Aufgabe 2 → Ich habe einen Endpunkt, der (oder derselbe wie oben) mehrspaltige Dateien konvertieren kann. - GEFÜLLT_

_⚠️ Achtung! → Aufgabe 1 und Aufgabe 2 befinden sich innerhalb des gleichen `/csvtojson`-Endpunkts, da automatisch erkannt wird, ob die Datei einspaltig oder mehrspaltig ist_

_✅ Aufgabe 3 → Zurückgegebene Zahlen sind im num/Int/double/float-Format und nicht im String-Format - COMPLETED_

_✅ Aufgabe 4 → Test mit Insomnia/Postman hinzufügen - ABGESCHLOSSEN_


## Ab 🚀

_Mit diesen Anweisungen können Sie zu Entwicklungs- und Testzwecken eine Arbeitskopie des Projekts auf Ihrem lokalen Computer erstellen._


### Voraussetzungen 📋

_Damit das Projekt korrekt funktioniert, wird empfohlen, eine Reihe von Programmen installiert und richtig konfiguriert zu haben:_
- [Visual Studio Code] (https://code.visualstudio.com/download)
- [Node.js und npm](https://nodejs.org/es/)


### Einbau 🔧

_Wenn Sie dieses Projekt in Ihr lokales Repository geklont haben, denken Sie daran, den folgenden Befehl im Terminal auszuführen, um die Abhängigkeiten zu installieren und dass alles korrekt funktioniert:_
```
npm install
```


### Umgebungsvariablen .env 🪛

_Damit das Projekt korrekt funktioniert, müssen Sie die Umgebungsvariablen aktivieren, dazu müssen Sie eine Datei mit dem Namen `.env` erstellen und die Daten, die Sie haben, in die Vorlage `.config.env` eintragen_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)


## Auszuführende Befehle ⌨️

_Sobald alle erforderlichen Programme und Abhängigkeiten installiert sind, führen Sie einfach den folgenden Befehl aus:_
```
npm init
```
_Oder Sie können auch den Befehl für die Entwicklungsversion eingeben._
```
npm run dev
```


## Wie funktioniert das?

_Die Idee des Projekts ist, dass beim Hochladen einer CSV-Datei diese automatisch in das JSON-Format konvertiert wird. Der Pfad der hochgeladenen CSV-Dateien ist `src/uploads` und der Pfad der transformierten Dateien ist `src/json`._
_Um die Anwendung mit Postman zu testen, müssen wir die im Pfad `Postman` gefundene Datei importieren. Dazu öffnen wir Postman und gehen zum Pfad `Datei → Import` und importieren die Datei `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Wenn wir den JSON in Postman importiert haben, um einen POST in der Route `http://localhost:8080/csvtojson` zu erstellen, müssen wir ihn in `body → form-data` im Abschnitt `key` überprüfen hat das Wort `csv` und befindet sich im `Datei` modus. Sobald dies erledigt ist, können wir im Abschnitt "Wert" unsere CSV-Datei hochladen._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Endpunkte 💻

_Um dieses spezielle Projekt durchzuführen, habe ich nur einen Endpunkt verwendet, der `/csvtojson` ist._
```
http://localhost:8080/csvtojson
```


## Gebaut mit 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Verwendete Programmiersprache.
* [Node.js](https://nodejs.org/es/docs/) – Umgebung zum Ausführen von JavaScript auf der Serverseite.
* [Express](https://www.npmjs.com/package/express) - node.js-Framework.
* [NPM](https://www.npmjs.com/) - Abhängigkeitsmanager.
* [Multer](https://www.npmjs.com/package/multer) - Modul zum Hochladen von Dateien in unsere App.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Modul zum Umwandeln von CSV-Dateien in JSON.


## Versioniert 📌

_Ich habe semantische Versionen [SemVer](http://semver.org/) für diese App._


## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Das ganze Projekt*


## Lizenz 📄

_Dieses Projekt ist unter der MIT-Lizenz lizenziert – weitere Einzelheiten finden Sie in der Datei [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE)._