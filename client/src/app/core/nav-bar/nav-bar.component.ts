import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/account/account.service';
import { IWishList } from 'src/app/shared/models/wishlist';
import { WishListService } from 'src/app/shop/wishList.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;
  isAdmin$: Observable<boolean>;
  wishlist$: Observable<IWishList>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService,
    private wishlistService: WishListService
    ) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.wishlist$ = this.wishlistService.wishlist$;
    this.currentUser$ = this.accountService.currentUser$;
    this.isAdmin$ = this.accountService.isAdmin$;
  }

  logout() {
    this.accountService.logout();
  }

}
