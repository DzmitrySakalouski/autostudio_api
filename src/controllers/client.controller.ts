import { controller, httpGet, httpPost } from 'inversify-express-utils';
import { Request, Response } from 'express';
import {inject} from "inversify";
import { IClientRepo } from '../repo';
import { ClientModel } from '../models';

@controller("/api/clients")
export class ClientController {
    constructor(
        @inject(IClientRepo) private clientRepo: IClientRepo
    ) {}

    @httpGet("/")
    public getClients(request: Request, respose: Response): Promise<ClientModel[]> {
        return new Promise<ClientModel[]>((resolve, reject) => {
            this.clientRepo.getAllClients().then(clients => {
                respose.json(clients);
            }).catch(error => respose.status(500).json({message: "Cannot get clients.", ...error}));
        });
    }

    @httpPost("/")
    public createClient(request: Request, respose: Response): Promise<void> {
        const oParams = request.body;

        return new Promise<void>(() => {
            this.clientRepo.createClient(oParams).then(result => {
                respose.json(result);
            }).catch(error => respose.status(500).json({message: "Cannot create clients.", ...error}));
        });
    }
}
