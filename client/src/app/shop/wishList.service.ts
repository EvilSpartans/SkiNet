import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IWishList, IWishListItem, WishList } from '../shared/models/WishList';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  baseUrl = environment.apiUrl;
  private wishlistSource = new BehaviorSubject<IWishList>(null);
  wishlist$ = this.wishlistSource.asObservable();

  constructor(private http: HttpClient) { }

  createPaymentIntent() {
    return this.http.post(this.baseUrl + 'payments/' + this.getCurrentWishListValue().id, {})
      .pipe(
        map((wishlist: IWishList) => {
          this.wishlistSource.next(wishlist);
        })
      );
  }


  getWishList(id: string) {
    return this.http.get(this.baseUrl + 'wishlist?id=' + id)
      .pipe(
        map((wishlist: IWishList) => {
          this.wishlistSource.next(wishlist);
          console.log(this.wishlistSource);
        })
      );
  }

  setwishlist(wishlist: IWishList) {
    return this.http.post(this.baseUrl + 'wishlist', wishlist).subscribe((response: IWishList) => {
      this.wishlistSource.next(response);
    }, error => {
      console.log(error);
    });
  }

  getCurrentWishListValue() {
    return this.wishlistSource.value;
  }

  addItemToWishList(item: IProduct, quantity = 1) {
    const itemToAdd: IWishListItem = this.mapProductItemToWishListItem(item, quantity);
    let wishlist = this.getCurrentWishListValue();
    if (wishlist === null) {
      wishlist = this.createWishList();
    }
    wishlist.items = this.addOrUpdateItem(wishlist.items, itemToAdd, quantity);
    this.setwishlist(wishlist);
  }

  removeItemFromWishList(item: IWishListItem) {
    const wishlist = this.getCurrentWishListValue();
    if (wishlist.items.some(x => x.id === item.id)) {
      wishlist.items = wishlist.items.filter(i => i.id !== item.id);
      if (wishlist.items.length > 0) {
        this.setwishlist(wishlist);
      } else {
        this.deleteWishList(wishlist);
      }
    }
  }

  deletNow(id: number) {
    const wishlist = this.getCurrentWishListValue();
    if (wishlist !== null) {
      if (wishlist.items.some(x => x.id === id)) {
        wishlist.items = wishlist.items.filter(i => i.id !== id);
        if (wishlist.items.length > 0) {
          this.setwishlist(wishlist);
        } else {
          this.deleteWishList(wishlist);
        }
      }
    }
  }

  deleteLocalWishList(id: string) {
    this.wishlistSource.next(null);
    localStorage.removeItem('wishlist_id');
  }

  deleteWishList(wishlist: IWishList) {
    return this.http.delete(this.baseUrl + 'wishlist?id=' + wishlist.id).subscribe(() => {
      this.wishlistSource.next(null);
      localStorage.removeItem('wishlist_id');
    }, error => {
      console.log(error);
    });
  }


  private addOrUpdateItem(items: IWishListItem[], itemToAdd: IWishListItem, quantity: number): IWishListItem[] {
    const index = items.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private createWishList(): IWishList {
    const wishlist = new WishList();
    localStorage.setItem('wishlist_id', wishlist.id);
    return wishlist;
  }

  private mapProductItemToWishListItem(item: IProduct, quantity: number): IWishListItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    };
  }
}
