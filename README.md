# π¨π»βπ»β»οΈ CSV TO JSON β»οΈπ¨π»βπ»

_This package has been developed from scratch by [Daniel EspaΓ±adero](https://github.com/DanielEspanadero)._

_This project is organized by [Nuwe](https://nuwe.io/) and is part of the qualifying challenge for the final of the face-to-face hackathon that will be held on June 30 at the Cruz Roja Barcelona headquarters. The requirements of the challenge can be found [here](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Translations π¬

_This README file is also available in other languages:_
- [Catalan](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [French](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [German](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Italian](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portuguese](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Spanish](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [Swedish](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Goals π―
_`Hackathon BCN Inclusive Coding` asks us to meet the following goals:_

_β Task 1 β I have an endpoint that can convert single column files. - COMPLETED_

_β Task 2 β I have an endpoint that can (or the same one above) convert multicolumn files. - COMPLETED_

_β οΈ Warning β Task 1 and task 2 are within the same endpoint `/csvtojson`, since it automatically detects if the file is single column or multicolumn_

_β Task 3 β The returned numbers are in num/Int/double/float format and not in string format - COMPLETED_

_β Task 4 β Add test using insomnia/Postman - COMPLETED_


## Starting π

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._


### Pre requirements π

_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)


### Installation π§

_When you have cloned this project into your local repository remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```


### Environment variables .env πͺ

_For the project to work correctly you have to enable the environment variables, for this you have to create a file with the name `.env` and enter the data you have in the `.config.env` template_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Commands to run β¨οΈ

_Once all the necessary programs and dependencies are installed, just run the command:_
```
npm start
```
_Or you can also enter the command for the development version._
```
npm run dev
```

## How does this work π€

_The idea of the project is that when you upload a CSV file, it automatically converts to JSON format. The uploaded CSV files path is `src/uploads`, and the transformed files path is `src/json`._
_To test the app with postman we have to import the file found in the path `postman`, to do this, we open postman and go to the path `file β import` and import the `CSV to JSON.postman_collection.json` file._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_When we have imported the JSON to postman, to make a POST in the route `http://localhost:8080/csvtojson`, we will have to check that in `body β form-data`, in the `key` section we have the word ` csv` and is in `file` mode. Once that is done, in the `value` section we can upload our CSV file._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Endpoints π»

_To carry out this project specifically, I have only used one endpoint which is `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Built with π οΈ

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [Express](https://www.npmjs.com/package/express) - node.js framework.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [Multer](https://www.npmjs.com/package/multer) - Module to upload files to our app.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Module to transform CSV files to JSON.

## Versioned π

_I have used semantic versioning [SemVer](http://semver.org/) for this application._

## Author βοΈ

* [Daniel EspaΓ±adero](https://github.com/DanielEspanadero) - *All the project*

## License π

_This project is licensed under the MIT License - see the file [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) for details._