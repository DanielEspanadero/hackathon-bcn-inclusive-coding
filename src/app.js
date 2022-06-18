// This file is the start of the project, where I instantiate the server class created with Express.

import Server from './models/Server';
import 'dotenv/config';

const server = new Server();

server.listen();