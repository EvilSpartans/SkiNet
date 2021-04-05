import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';
import { Router, RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animation/fadeAnimation';
import { WishListService } from './shop/wishList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(
    private basketService: BasketService,
    private wishlistService: WishListService,
    private accountService: AccountService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.loadBasket();
    this.loadWishList();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
      console.log('loaded user');
    }, error => {
      console.log(error);
    });
  }

  // loadCurrentUser() {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     this.accountService.loadCurrentUser(token).subscribe(() => {
  //       console.log('loaded user');
  //     }, error => {
  //       console.log(error);
  //     });
  //   }
  // }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);
      });
    }
  }

  loadWishList() {
    const wishlistId = localStorage.getItem('wishlist_id');
    if (wishlistId) {
      this.wishlistService.getWishList(wishlistId).subscribe(() => {
        console.log('initialised wishlist');
        console.log('Working on Wishlist');
        console.log(this.wishlistService.getCurrentWishListValue());
      }, error => {
        console.log(error);
      });
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
