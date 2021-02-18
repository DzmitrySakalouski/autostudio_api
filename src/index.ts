import 'reflect-metadata';

import * as bodyParser from "body-parser";
import container from "./instances/container";
import {InversifyExpressServer, TYPE, interfaces} from "inversify-express-utils";

import "./controllers";

const server = new InversifyExpressServer(container);

server.setConfig(app => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
});

const app = server.build();

app.listen(3001, () => {
    console.log(`App is running`);
});
