import ConvertCsvToJson from '../helpers/csvToJson';

// In this controller I import the logic to transform the file from CSV to JSON.

export const csvToJson = async (req, res) => {
    try {
        const nameCsv = req.file.filename;
        const nameJson = nameCsv.replace('.csv', '.json')
        const convert = new ConvertCsvToJson(nameCsv, nameJson)
        convert.csvToJson();

        console.log(nameCsv);
        console.log(nameJson);
        res.status(200).json({
            msg: 'File uploaded successfully!',
            file: req.file
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error 500 - Internal server error'
        });
    };
};