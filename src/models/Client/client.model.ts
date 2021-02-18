import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import 'reflect-metadata';

type ClientCreationAttributes = Omit<ClientModel, 'id'>;

@Table({
    timestamps: true,
})
export class Client extends Model<ClientModel, ClientCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public fullName: string;

    @Column
    public car: string;

    @Column
    public phoneNumber: string;
}

export abstract class ClientModel {
    public id?: number;
    public fullName: string;
    public car: string;
    public phoneNumber: string;
}
