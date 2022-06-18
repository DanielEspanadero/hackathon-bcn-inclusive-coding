# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Questo pacchetto è stato sviluppato da zero da [Daniel Españadero](https://github.com/DanielEspanadero)._

_Questo progetto è organizzato da [Nuwe](https://nuwe.io/) e fa parte della sfida di qualificazione per la finale dell'hackathon faccia a faccia che si terrà il 30 giugno presso la sede della Croce Rossa a Barcellona . I requisiti della sfida possono essere trovati [qui](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Traduzioni 💬

_Questo file README è disponibile anche in altre lingue:_
- [Catalano](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Francese](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [tedesco](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Inglese](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)
- [Portoghese](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Spagnolo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [svedese](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Obiettivi 🎯
_`Hackathon BCN Inclusive Coding` ci chiede di raggiungere i seguenti obiettivi:_

_✅ Attività 1 → Ho un endpoint in grado di convertire file a colonna singola. - RIEMPITO_

_✅ Attività 2 → Ho un endpoint che può (o lo stesso di cui sopra) convertire file a più colonne. - RIEMPITO_

_⚠️ Attenzione! → L'attività 1 e l'attività 2 si trovano all'interno dello stesso endpoint `/csvtojson`, poiché rileva automaticamente se il file è a colonna singola o multi-colonna_

_✅ Attività 3 → I numeri restituiti sono in formato num/Int/double/float e non in formato stringa - COMPLETED_

_✅ Compito 4 → Aggiungi test usando insonnia/postman - COMPLETATO_


## A partire 🚀

_Queste istruzioni ti permetteranno di ottenere una copia funzionante del progetto sulla tua macchina locale per scopi di sviluppo e test._


### Prerequisiti 📋

_Affinché il progetto funzioni correttamente, si consiglia di avere una serie di programmi installati e opportunamente configurati:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)


### Installazione 🔧

_Quando hai clonato questo progetto nel tuo repository locale ricordati di eseguire il seguente comando nel terminale per installare le dipendenze e che tutto funzioni correttamente:_
```
npm install
```


### Variabili d'ambiente .env 🪛

_Affinché il progetto funzioni correttamente devi abilitare le variabili d'ambiente, per questo devi creare un file con il nome `.env` e inserire i dati che hai nel template `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Comandi da eseguire ⌨️

_Una volta installati tutti i programmi e le dipendenze necessari, eseguire semplicemente il comando:_
```
npm init
```
_Oppure puoi anche inserire il comando per la versione di sviluppo._
```
npm run dev
```

## Come funziona?

_L'idea del progetto è che quando carichi un file CSV, viene automaticamente convertito in formato JSON. Il percorso dei file CSV caricati è `src/uploads` e il percorso dei file trasformati è `src/json`._
_Per testare l'applicazione con postman dobbiamo importare il file trovato nel percorso `postman`, per farlo apriamo postman e andiamo al percorso `file → import` e importiamo il file `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Quando avremo importato il JSON in postman, per fare un POST nel percorso `http://localhost:8080/csvtojson`, dovremo controllarlo in `body → form-data`, nella sezione `key` esso contiene la parola `csv` ed è in modalità `File`. Fatto ciò, nella sezione `valore` possiamo caricare il nostro file CSV._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Endpoint 💻

_Per realizzare questo progetto specifico ho usato solo un endpoint che è `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Costruito con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguaggio di programmazione utilizzato.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente per eseguire JavaScript sul lato server.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gestore delle dipendenze.
* [Multer](https://www.npmjs.com/package/multer) - Modulo per caricare file sulla nostra app.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Modulo per trasformare i file CSV in JSON.

## Versione 📌

_Ho usato versioni semantiche [SemVer](http://semver.org/) per questa app._

## Autore ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *L'intero progetto*

## Licenza 📄

_Questo progetto è concesso in licenza con la licenza MIT - vedere il file [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) per maggiori dettagli._