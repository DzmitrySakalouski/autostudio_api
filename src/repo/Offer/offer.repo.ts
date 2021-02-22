import {Fee, Offer, OfferModel} from "../../models";
import "sequelize/types";
import { Sequelize } from "sequelize";

export class OfferRepo {
    public getOffersByClientId(clientOwnerId: number): Promise<OfferModel[]> {
        return new Promise<OfferModel[]>((resolve, reject) => {
            Offer.findAll(
                {
                    where: {
                        clientId: clientOwnerId
                    },
                    attributes: [
                        "id",
                        "createdAt",
                        "comment",
                        "createdAt",
                        [Sequelize.fn('sum', Sequelize.col('price')), 'totalFeeAmount'],
                    ],
                    include: [{
                        model: Fee,
                    }],
                    group: ['Offer.id']
                }).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    public createOffer(oParams: OfferModel): Promise<OfferModel> {
        return new Promise<OfferModel>((resolve, reject) => {
            Offer.create(oParams).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    public deleteOffer(offerId: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Offer.destroy({where: {id: offerId}}).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    public updateOffer(offerId: number, oParams: OfferModel): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Offer.update({...oParams}, {where: {id: offerId}}).then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}
