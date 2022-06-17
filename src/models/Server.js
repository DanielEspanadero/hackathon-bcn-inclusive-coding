import express from "express";
import cors from "cors";

// Importing routes
import csvToJsonRouter from '../routes/csvtojson.routes';
import error404Router from '../routes/error404.routes';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            convert: '/csvtojson',
            error404: '*'
        };

        this.middlewares();
        this.route();
        this.listen();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    route() {
        this.app.use(this.path.convert, csvToJsonRouter);
        this.app.use(this.path.error404, error404Router);
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenning on port ${this.port}`);
        });
    };
};

export default Server;