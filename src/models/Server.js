import express from "express";
import cors from "cors";

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.path = {
            convert: '/csvtojson'
        }

        this.middlewares();
        this.route();
        this.listen();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    route() {
        this.app.use()
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;