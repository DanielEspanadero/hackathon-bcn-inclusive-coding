import ConvertCsvToJson from "../helpers/csvToJson";

export const csvToJsonOneColumn = async (req, res) => {
    try {
        const nameCsv = req.file.filename;
        const nameJson = nameCsv.replace('.csv', '.json')
        const convert = new ConvertCsvToJson(nameCsv, nameJson)
        convert.csvToJson1Column();

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

export const csvToJsonMultiColumn = async (req, res) => {
    try {
        res.status(200).json({
            msg: 'File uploaded successfully!',
            file: req.file
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal server error'
        });
    };
};