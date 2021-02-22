import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import 'reflect-metadata';
import { Offer } from '../Offer/offer.model';
import { Fee } from '../Fee';

type ClientCreationAttributes = Omit<ClientModel, 'id'>;

@Table({
    timestamps: true,
})
export class Client extends Model {
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

    public offerCount: number;

    public totalFeeAmount: number;
}

export abstract class ClientModel {
    public id: number;
    public fullName: string;
    public car: string;
    public phoneNumber: string;
    public offerCount: number;
    public totalFeeAmount: number;
}
