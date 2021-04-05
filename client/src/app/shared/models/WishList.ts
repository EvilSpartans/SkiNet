import uuid from 'uuid/v4';

export interface IWishList {
    id: string;
    items: IWishListItem[];
}

export interface IWishListItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class WishList implements IWishList {
    id = uuid();
    items: IWishListItem[] = [];
}

