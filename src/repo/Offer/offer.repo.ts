import {Offer, OfferModel} from "../../models";

export class OfferRepo {
    getOffersByClientId(clientOwnerId: number): Promise<OfferModel[]> {
        return new Promise<OfferModel[]>((resolve, reject) => {
            Offer.findAll({where: {
                clientId: clientOwnerId,
            }}).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    createOffer(oParams: OfferModel): Promise<OfferModel> {
        return new Promise<OfferModel>((resolve, reject) => {
            Offer.create(oParams).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    deleteOffer(offerId: number): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Offer.destroy({where: {id: offerId}}).then(result => resolve(result)).catch(error => reject(error));
        });
    }

    updateOffer(offerId: number, oParams: OfferModel): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            Offer.update({...oParams}, {where: {id: offerId}}).then(result => resolve(result))
                .catch(error => reject(error))
        });
    }
}
