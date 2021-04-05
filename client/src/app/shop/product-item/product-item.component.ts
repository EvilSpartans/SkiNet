import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { BasketService } from 'src/app/basket/basket.service';
import { WishListService } from 'src/app/shop/wishList.service';
import { IWishList } from 'src/app/shared/models/wishlist';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IProduct;
  wishlist: IWishList[];
  currentUser$: Observable<IUser>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private wishlistService: WishListService,
    ) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;

  }

  // Basket

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }

  removeItemFromBasket(id: number) {
    this.basketService.deletNow(id);
   }

  isAlready(id: number): boolean {
    const basket = this.basketService.getCurrentBasketValue();
    if (basket === null ) {
      return false;
    }
    const foundItemIndex = basket.items.findIndex(x => x.id === id);
    if (foundItemIndex > -1) {
      return true;
    }
    return false;
  }


  // Wishlist

  addItemToWishList() {
    this.wishlistService.addItemToWishList(this.product);
  }

  removeItemFromWishList(id: number) {
    this.wishlistService.deletNow(id);
   }

  isAlready2(id: number): boolean {
    const wishlist = this.wishlistService.getCurrentWishListValue();
    if (wishlist === null ) {
      return false;
    }
    const foundItemIndex = wishlist.items.findIndex(x => x.id === id);
    if (foundItemIndex > -1) {
      return true;
    }
    return false;
  }

}
