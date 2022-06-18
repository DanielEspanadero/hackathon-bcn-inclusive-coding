# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Este paquete ha sido desarrollado desde cero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Este proyecto está organizado por [Nuwe](https://nuwe.io/) y forma parte del reto clasificatorio para la final del hackathon presencial que se celebrará el 30 de junio en la sede de Cruz Roja Barcelona. Los requisitos del desafío se pueden encontrar [aquí](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Traducciones 💬

_Este archivo README también está disponible en otros idiomas:_
- [Catalán](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Francés](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [Alemán](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Italiano](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Portugués](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-pt.md)
- [Español](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [Sueco](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Goles 🎯
_`Hackathon BCN Inclusive Coding` nos pide cumplir los siguientes objetivos:_

_✅ Tarea 1 → Tengo un punto final que puede convertir archivos de una sola columna. - COMPLETADO_

_✅ Tarea 2 → Tengo un punto final que puede (o el mismo de arriba) convertir archivos de varias columnas. - COMPLETADO_

_⚠️ ¡Advertencia! → La tarea 1 y la tarea 2 están dentro del mismo punto final `/csvtojson`, ya que detecta automáticamente si el archivo es de una sola columna o de varias columnas_

_✅ Tarea 3 → Los números devueltos están en formato num/Int/double/float y no en formato de cadena - COMPLETED_

_✅ Tarea 4 → Agregar prueba usando insomnio/Cartero - COMPLETADO_


## Empezando 🚀

_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y prueba._


### Pre requisitos 📋

_Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)


### Instalación 🔧

_Cuando hayas clonado este proyecto en tu repositorio local recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:_
```
instalar npm
```


### Variables de entorno .env 🪛

_Para que el proyecto funcione correctamente tienes que habilitar las variables de entorno, para ello tienes que crear un archivo con el nombre `.env` e introducir los datos que tienes en la plantilla `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Comandos para ejecutar ⌨️

_Una vez que todos los programas y dependencias necesarios estén instalados, simplemente ejecute el comando:_
```
npm init
```
_O también puede ingresar el comando para la versión de desarrollo._
```
npm run dev
```

## ¿Cómo funciona esto?

_La idea del proyecto es que cuando subes un archivo CSV, se convierte automáticamente a formato JSON. La ruta de los archivos CSV cargados es `src/uploads`, y la ruta de los archivos transformados es `src/json`._
_Para probar la aplicación con postman tenemos que importar el archivo que se encuentra en la ruta `postman`, para ello abrimos postman y vamos a la ruta `archivo → importar` e importamos el archivo `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Cuando hayamos importado el JSON a postman, para hacer un POST en la ruta `http://localhost:8080/csvtojson`, tendremos que comprobarlo en `body → form-data`, en el apartado `key` tiene la palabra `csv` y está en modo `File`. Una vez hecho esto, en la sección `valor` podemos subir nuestro archivo CSV._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Puntos finales 💻

_Para realizar este proyecto en concreto solo he utilizado un endpoint que es `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Construido con 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Multer](https://www.npmjs.com/package/multer) - Módulo para subir archivos a nuestra app.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Módulo para transformar archivos CSV a JSON.

## Versionado 📌

_He utilizado versiones semánticas [SemVer](http://semver.org/) para esta aplicación._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo el proyecto*

## Licencia 📄

_Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENCIA](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) para más detalles._