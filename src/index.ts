import 'reflect-metadata';

const bodyParser = require('body-parser');
import container from "./instances/container";
import {InversifyExpressServer} from "inversify-express-utils";
import {sequelize} from "./instances/sequelize";

import "./controllers";
import {Client, Offer, Fee} from './models';

const port = process.env.PORT || 3001

sequelize.authenticate().then(() => {
    console.log(`DATABASE CONNECTED\n`);
});
sequelize.addModels([Client, Offer, Fee]);
sequelize.sync();

const server = new InversifyExpressServer(container);

server.setConfig(app => {
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(bodyParser.json());
    app.use((req: any, res: any, next: any): void => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Content-Type", "application/json; charset=utf-8");
        next();
    });
});

const app = server.build();

app.get("/", (req, resp) => {
    resp.json({message: "App is running"});
});

app.listen(port, () => {    
    console.log(`App is running`);
});
