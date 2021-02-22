import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import 'reflect-metadata';
import { Offer, OfferModel } from '../Offer/offer.model';
import { Client } from '../Client';

type FeeCreationAttributes = Omit<FeeModel, 'id'>;


@Table({
    timestamps: true
})
export class Fee extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public name: string;

    @Column
    public price: number;

    @ForeignKey(() => Offer)
    @Column
    public orderId: number;

    @BelongsTo(() => Offer)
    public order: Offer;
}

export abstract class FeeModel {
    public id: number;
    public name: string;
    public price: number;
    public orderId: number;
}
