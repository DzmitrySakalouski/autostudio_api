import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import 'reflect-metadata';
import { Offer } from '../Offer/offer.model';

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

    @HasMany(() => Offer)
    public offers: Offer[];
}

export abstract class ClientModel {
    public id: number;
    public fullName: string;
    public car: string;
    public phoneNumber: string;
}
