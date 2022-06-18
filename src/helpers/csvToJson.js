import csv from 'csvtojson';
import path from 'path';
import fs from 'fs';

class ConvertCsvToJson {
    constructor(fileCsv, fileJson) {
        this.fileCsv = fileCsv;
        this.fileJson = fileJson;
    };

    async csvToJson() {
        const routeCsv = path.join(__dirname, `../uploads/${this.fileCsv}`)
        const fileUploaded = await csv({
            checkType: true
        })
            .fromFile(routeCsv)
            .then((jsonObj) => {
                const routeJson = path.join(__dirname, `../json/${this.fileJson}`)
                fs.writeFile(routeJson, JSON.stringify(jsonObj), err => {
                    if(err) throw new Error (err);
                    console.log(`File converted sucesfully!`);
                })
            })
    };
};

export default ConvertCsvToJson;