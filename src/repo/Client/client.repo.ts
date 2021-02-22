import {ClientModel, Client, Offer, Fee} from "../../models";
import {injectable} from "inversify";
import {IClientRepo} from "./client.repo-type";
import { error } from "console";
import { Sequelize } from "sequelize";

@injectable()
export class ClientRepo implements IClientRepo {
    public getAllClients(): Promise<ClientModel[]> {
        return new Promise<ClientModel[]>((resolve, reject) => {
            Client.findAll({
                attributes: [
                    "id", 
                    "fullName", 
                    "car", 
                    "phoneNumber",
                    "createdAt",
                    [Sequelize.fn('count', Sequelize.col('comment')), 'offerCount'],
                    [Sequelize.fn('sum', Sequelize.col('price')), 'totalFeeAmount']],
                include: [{
                    model: Offer, 
                    attributes: [],
                    include: [{
                        model: Fee,
                        attributes: [],
                    }]
                }],
                group: ['Client.id']
            }).then(clients => {
                resolve(clients);
            }).catch(error => {
                console.log(error);
                
                reject(error);
            });
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

    public updateClient(clientId: number, oParams: ClientModel): Promise<ClientModel> {
        return new Promise<any>((resolve, reject) => {
            Client.update({...oParams}, {where: {id: clientId}}).then(result => resolve(result)).catch(error => reject(error));
        });
    }
}
