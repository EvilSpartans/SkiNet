!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{h9W5:function(e,n,i){"use strict";i.r(n),i.d(n,"OrdersModule",function(){return I});var o,c=i("ofXK"),s=i("tyNb"),a=i("fXoL"),b=i("AytR"),d=i("tk/3"),u=((o=function(){function e(r){t(this,e),this.http=r,this.baseUrl=b.a.apiUrl}return r(e,[{key:"getOrdersForUser",value:function(){return this.http.get(this.baseUrl+"orders")}},{key:"getOrderDetailed",value:function(t){return this.http.get(this.baseUrl+"orders/"+t)}}]),e}()).\u0275fac=function(t){return new(t||o)(a.Yb(d.b))},o.\u0275prov=a.Kb({token:o,factory:o.\u0275fac,providedIn:"root"}),o);function l(t,e){if(1&t&&(a.Ub(0,"tr",6),a.Ub(1,"th"),a.Hc(2),a.Tb(),a.Ub(3,"td"),a.Hc(4),a.gc(5,"date"),a.Tb(),a.Ub(6,"td"),a.Hc(7),a.gc(8,"currency"),a.Tb(),a.Ub(9,"td"),a.Hc(10),a.Tb(),a.Tb()),2&t){var r=e.$implicit;a.nc("routerLink","/orders/",r.id,""),a.Bb(2),a.Jc("# ",r.id,""),a.Bb(2),a.Ic(a.ic(5,5,r.orderDate,"medium")),a.Bb(3),a.Ic(a.hc(8,8,r.total)),a.Bb(3),a.Ic(r.status)}}var f,p=((f=function(){function e(r){t(this,e),this.ordersService=r}return r(e,[{key:"ngOnInit",value:function(){this.getOrders()}},{key:"getOrders",value:function(){var t=this;this.ordersService.getOrdersForUser().subscribe(function(e){t.orders=e},function(t){console.log(t)})}}]),e}()).\u0275fac=function(t){return new(t||f)(a.Ob(u))},f.\u0275cmp=a.Ib({type:f,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,e){1&t&&(a.Ub(0,"div",0),a.Ub(1,"div",1),a.Ub(2,"div",2),a.Ub(3,"table",3),a.Ub(4,"thead",4),a.Ub(5,"tr"),a.Ub(6,"th"),a.Hc(7,"Order"),a.Tb(),a.Ub(8,"th"),a.Hc(9,"Date"),a.Tb(),a.Ub(10,"th"),a.Hc(11,"Total"),a.Tb(),a.Ub(12,"th"),a.Hc(13,"Status"),a.Tb(),a.Tb(),a.Tb(),a.Ub(14,"tbody"),a.Fc(15,l,11,10,"tr",5),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&t&&(a.Bb(15),a.lc("ngForOf",e.orders))},directives:[c.m,s.d],pipes:[c.f,c.d],styles:[""]}),f),h=i("tc9g"),v=i("GJcC"),g=i("PoZw");function m(t,e){if(1&t&&(a.Ub(0,"div",2),a.Ub(1,"div",3),a.Pb(2,"app-basket-summary",4),a.Tb(),a.Ub(3,"div",5),a.Pb(4,"app-order-totals",6),a.Tb(),a.Tb()),2&t){var r=a.fc();a.Bb(2),a.lc("items",r.order.orderItems)("isBasket",!1)("isOrder",!0),a.Bb(2),a.lc("shippingPrice",r.order.shippingPrice)("subtotal",r.order.subtotal)("total",r.order.total)}}var U,O,T,y=[{path:"",component:p},{path:":id",component:(U=function(){function e(r,n,i){t(this,e),this.route=r,this.breadcrumbService=n,this.ordersService=i,this.breadcrumbService.set("@OrderDetailed","")}return r(e,[{key:"ngOnInit",value:function(){var t=this;this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(function(e){t.order=e,t.breadcrumbService.set("@OrderDetailed","Order# ".concat(e.id," - ").concat(e.status))},function(t){console.log(t)})}}]),e}(),U.\u0275fac=function(t){return new(t||U)(a.Ob(s.a),a.Ob(h.c),a.Ob(u))},U.\u0275cmp=a.Ib({type:U,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,e){1&t&&(a.Ub(0,"div",0),a.Fc(1,m,5,6,"div",1),a.Tb()),2&t&&(a.Bb(1),a.lc("ngIf",e.order))},directives:[c.n,v.a,g.a],styles:[""]}),U),data:{breadcrumb:{alias:"OrderDetailed"}}}],w=((O=function e(){t(this,e)}).\u0275fac=function(t){return new(t||O)},O.\u0275mod=a.Mb({type:O}),O.\u0275inj=a.Lb({imports:[[s.g.forChild(y)],s.g]}),O),k=i("PCNd"),I=((T=function e(){t(this,e)}).\u0275fac=function(t){return new(t||T)},T.\u0275mod=a.Mb({type:T}),T.\u0275inj=a.Lb({imports:[[c.c,w,k.a]]}),T)}}])}();