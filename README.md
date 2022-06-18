# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_This package has been developed from scratch by [Daniel Españadero](https://github.com/DanielEspanadero)._

_This project is organized by [Nuwe](https://nuwe.io/) and is part of the qualifying challenge for the final of the face-to-face hackathon that will be held on June 30 at the Cruz Roja Barcelona headquarters. The requirements of the challenge can be found [here](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Translations 💬

_This README file is also available in other languages:_
- [Catalan]()
- [French]()
- [German]()
- [Italian]()
- [Portuguese]()
- [Spanish]()
- [Swedish]()

## Goals 🎯
_`Hackathon BCN Inclusive Coding` asks us to meet the following goals:_

_✅ Task 1 → I have an endpoint that can convert single column files. - COMPLETED_

_✅ Task 2 → I have an endpoint that can (or the same one above) convert multicolumn files. - COMPLETED_

_⚠️ Warning → Task 1 and task 2 are within the same endpoint `/csvtojson`, since it automatically detects if the file is single column or multicolumn_

_✅ Task 3 → The returned numbers are in num/Int/double/float format and not in string format - COMPLETED_

_✅ Task 4 → Add test using insomnia/Postman - COMPLETED_


## Starting 🚀

_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._


### Pre requirements 📋

_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)


### Installation 🔧

_When you have cloned this project into your local repository remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```


### Environment variables .env 🪛

_For the project to work correctly you have to enable the environment variables, for this you have to create a file with the name `.env` and enter the data you have in the `.config.env template`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Commands to run ⌨️

_Once all the necessary programs and dependencies are installed, just run the command:_
```
npm start
```
_Or you can also enter the command for the development version._
```
npm run dev
```

## How does this work 🤔

_The idea of the project is that when you upload a CSV file, it automatically converts to JSON format. The uploaded CSV files path is `src/uploads`, and the transformed files path is `src/json`._
_To test the app with postman we have to import the file found in the path `postman`, to do this, we open postman and go to the path `file → import` and import the `CSV to JSON.postman_collection.json` file._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

