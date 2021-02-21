import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import 'reflect-metadata';
import { Client } from '../Client';
import { Fee } from '../Fee/fee.model';

type OfferCreationAttributes = Omit<OfferModel, 'id'>;

@Table({
    timestamps: true
})
export class Offer extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public comment: string;

    @ForeignKey(() => Client)
    @Column
    public clientId: number;

    @BelongsTo(() => Client)
    public client: Client;

    @HasMany(() => Fee)
    public fees: Fee[];
}

export abstract class OfferModel {
    public id: number;
    public comment: string;
    public clientId: number;
    public fees: Fee[];
}
