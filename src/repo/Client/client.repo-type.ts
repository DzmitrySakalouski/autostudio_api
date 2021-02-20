import { ClientModel } from "../../models";
export abstract class IClientRepo {
    public abstract getAllClients(): Promise<ClientModel[]>;
    public abstract createClient(oParams: ClientModel): Promise<ClientModel>;
    public abstract deleteClient(clientId: number): Promise<any>;
    public abstract updateClient(clientId: number, oParams: ClientModel): Promise<ClientModel>;
}
