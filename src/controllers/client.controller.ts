import { controller, httpDelete, httpGet, httpPost, httpPut, queryParam, response } from 'inversify-express-utils';
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
                respose.json({clients});
            }).catch(error => respose.status(500));
        });
    }

    @httpPost("/")
    public createClient(request: Request, respose: Response): Promise<void> {
        const oParams = request.body;

        console.log("\n");
        console.log(request);
        console.log("\n");
        
        

        return new Promise<void>(() => {
            this.clientRepo.createClient(oParams).then(result => {
                respose.json(result);
            }).catch(error => respose.status(500).json({message: "Cannot create clients.", ...error}));
        });
    }

    @httpDelete("/")
    public deleteClient(@queryParam("clientId") clientId: number, @response() response: Response): Promise<void> {        
        return new Promise<void>(() => {
            this.clientRepo.deleteClient(Number(clientId)).then(deletedRecord => {
                console.log("deletedRecord 1", deletedRecord);
                console.log("deletedRecord 2", typeof deletedRecord);
                
                if (deletedRecord) {
                    response.status(200).json({message: "Deleted successfully"});          
                } else {
                    response.status(404).json({message: "Record not found"});
                }
            }).catch(error => response.status(500).json({...error}));
        });
    }

    @httpPut("/")
    public updateClient(@queryParam("clientId") clientId: number, @response() response: Response, request: Request): Promise<void> {
        const oParams = request.body;
        
        return new Promise<void>(() => {
            this.clientRepo.updateClient(clientId, oParams)
                .then(result => response.json(result))
                .catch(error => response.status(500).send({message: "Cannot update", ...error}));
        });
    }
}
