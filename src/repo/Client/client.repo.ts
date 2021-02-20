import {ClientModel, Client} from "../../models";
import {injectable} from "inversify";
import {IClientRepo} from "./client.repo-type";

@injectable()
export class ClientRepo implements IClientRepo {
    public getAllClients(): Promise<ClientModel[]> {
        return new Promise<ClientModel[]>((resolve, reject) => {
            Client.findAll().then(clients => resolve(clients)).catch(error => reject(error));
        });
    }

    public createClient(oParams: ClientModel): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Client.create(oParams)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    public deleteClient(clientId: number): Promise<any> {
        return Client.destroy({
            where: {
                id: clientId,
            }
        });
    }
}
