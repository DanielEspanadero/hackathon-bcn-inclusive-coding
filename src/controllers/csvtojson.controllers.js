export const csvToJson = (req, res) => {
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