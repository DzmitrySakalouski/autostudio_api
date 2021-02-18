import { controller, httpGet } from 'inversify-express-utils';
import { Request, Response } from 'express';

@controller("/api/clients")
export class ClientController {
    constructor() {}

    @httpGet("/")
    public getClients(request: Request, respose: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            respose.json({message: "hello"});
        });
    }
}
