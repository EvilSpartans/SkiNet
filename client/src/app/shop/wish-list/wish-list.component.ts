import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWishList, IWishListItem } from '../../shared/models/wishlist';
import { WishListService } from '../wishList.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishlist$: Observable<IWishList>;

  constructor(private wishlistService: WishListService) { }

  ngOnInit() {
    this.wishlist$ = this.wishlistService.wishlist$;
  }

  removeWishListItem(item: IWishListItem) {
    this.wishlistService.removeItemFromWishList(item);
  }


}
