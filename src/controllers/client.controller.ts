import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import {inject} from "inversify";
import { IClientRepo } from '../repo';

@controller("/api/clients")
export class ClientController {
    constructor(
        @inject(IClientRepo) private clientRepo: IClientRepo
    ) {}

    @httpGet("/")
    public getClients(request: Request, respose: Response): Promise<void> {
        return new Promise((resolve, reject) => {
            respose.json({message: "hello"});
        });
    }

    @httpPost("/")
    public createClient(request: Request, respose: Response): Promise<void> {
        const oParams = request.body;

        return new Promise<void>(() => {
            this.clientRepo.createClient(oParams).then(result => {
                respose.send(result);
            }).catch(error => respose.send(error));
        });
    }
}
