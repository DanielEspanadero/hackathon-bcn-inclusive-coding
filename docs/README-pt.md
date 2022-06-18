# 👨🏻‍💻♻️ CSV TO JSON ♻️👨🏻‍💻

_Este pacote foi desenvolvido do zero por [Daniel Españadero](https://github.com/DanielEspanadero)._

_Este projeto é organizado por [Nuwe](https://nuwe.io/) e faz parte do desafio classificatório para a final do hackathon presencial que será realizado no dia 30 de junho na sede da Cruz Vermelha em Barcelona . Os requisitos do desafio podem ser encontrados [aqui](https://nuwe.io/challenge/hackathon-bcn-inclusive-coding-backend)._


## Traduções 💬

_Este arquivo README também está disponível em outros idiomas:_
- [Catalão](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-cat.md)
- [Francês](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-fr.md)
- [Alemão](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-de.md)
- [Italiano](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-it.md)
- [Inglês](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/README.md)
- [Espanhol](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-es.md)
- [Sueco](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/README-se.md)

## Gols 🎯
_`Hackathon BCN Inclusive Coding` nos pede para cumprir os seguintes objetivos:_

_✅ Tarefa 1 → Tenho um endpoint que pode converter arquivos de coluna única. - PREENCHIDAS_

_✅ Tarefa 2 → Eu tenho um endpoint que pode (ou o mesmo que acima) converter arquivos de várias colunas. - PREENCHIDAS_

_⚠️ Aviso! → A tarefa 1 e a tarefa 2 estão dentro do mesmo endpoint `/csvtojson`, pois detecta automaticamente se o arquivo é de coluna única ou multi-coluna_

_✅ Tarefa 3 → Os números retornados estão no formato num/Int/double/float e não no formato string - COMPLETED_

_✅ Tarefa 4 → Adicionar teste usando insônia/Postman - CONCLUÍDO_


## Começando 🚀

_Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste._


### Pré-requisitos 📋

_Para que o projeto funcione corretamente, é recomendável ter uma série de programas instalados e configurados corretamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)


### Instalação 🔧

_Ao ter clonado este projeto em seu repositório local lembre-se de executar o seguinte comando no terminal para instalar as dependências e que tudo funcione corretamente:_
```
npm install
```


### Variáveis ​​de ambiente .env 🪛

_Para que o projeto funcione corretamente você tem que habilitar as variáveis ​​de ambiente, para isso você tem que criar um arquivo com o nome `.env` e inserir os dados que você tem no template `.config.env`_

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/01.png)

## Comandos para executar ⌨️

_Uma vez que todos os programas e dependências necessários estejam instalados, basta executar o comando:_
```
npm init
```
_Ou você também pode digitar o comando para a versão de desenvolvimento._
```
npm run dev
```

## Como é que isto funciona?

_A ideia do projeto é que ao fazer o upload de um arquivo CSV, ele seja convertido automaticamente para o formato JSON. O caminho dos arquivos CSV carregados é `src/uploads`, e o caminho dos arquivos transformados é `src/json`._
_Para testar a aplicação com o postman temos que importar o arquivo encontrado no caminho `postman`, para isso abrimos o postman e vamos até o caminho `file → import` e importamos o arquivo `CSVtoJSON.postman_collection.json`._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/02.png)

_Quando tivermos importado o JSON para o postman, para fazer um POST na rota `http://localhost:8080/csvtojson`, teremos que verificar em `body → form-data`, na seção `key` tem a palavra `csv ` e está no modo `File`. Feito isso, na seção `value` podemos fazer o upload do nosso arquivo CSV._

![Demo](https://github.com/DanielEspanadero/hackathon-bcn-inclusive-coding/blob/main/docs/03.png)


## Pontos Finais 💻

_Para realizar este projeto específico eu usei apenas um endpoint que é `/csvtojson`._
```
http://localhost:8080/csvtojson
```

## Construído com 🛠️

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguagem de programação utilizada.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente para executar JavaScript no lado do servidor.
* [Express](https://www.npmjs.com/package/express) - framework node.js.
* [NPM](https://www.npmjs.com/) - Gerenciador de dependências.
* [Multer](https://www.npmjs.com/package/multer) - Módulo para fazer upload de arquivos para nosso aplicativo.
* [csvtojson](https://www.npmjs.com/package/csvtojson) - Módulo para transformar arquivos CSV em JSON.

## Versionado 📌

_Eu usei versões semânticas [SemVer](http://semver.org/) para este aplicativo._

## Autor ✒️

* [Daniel Españadero](https://github.com/DanielEspanadero) - *Todo o projeto*

## Licença 📄

_Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/DanielEspanadero/hackathon-jobarcelona22-back-javascript/blob/main/LICENSE) para mais detalhes._