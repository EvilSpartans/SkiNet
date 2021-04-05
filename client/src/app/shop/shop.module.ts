import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CoreModule } from '../core/core.module';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailsComponent, WishListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
