import express from 'express';
import cors from 'cors';

// Importing routes
import csvToJsonRouter from '../routes/csvtojson.routes';
import error404Router from '../routes/error404.routes';

// I create the server logic in a class since it is easier to scale the project, I have added the cors for a future connection with a browser.

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
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            credentials: true,
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
            origin: '*',
            preflightContinue: false,
        }));
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