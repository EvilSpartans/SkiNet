(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "UDJr":
    /*!*********************************************!*\
      !*** ./src/app/shared/models/pagination.ts ***!
      \*********************************************/

    /*! exports provided: Pagination */

    /***/
    function UDJr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Pagination", function () {
        return Pagination;
      });

      var Pagination = function Pagination() {
        _classCallCheck(this, Pagination);

        this.data = [];
      };
      /***/

    },

    /***/
    "XJHN":
    /*!*********************************************!*\
      !*** ./src/app/shared/models/shopParams.ts ***!
      \*********************************************/

    /*! exports provided: ShopParams */

    /***/
    function XJHN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopParams", function () {
        return ShopParams;
      });

      var ShopParams = function ShopParams() {
        _classCallCheck(this, ShopParams);

        this.brandId = 0;
        this.typeId = 0;
        this.sort = 'name';
        this.pageNumber = 1;
        this.pageSize = 6;
      };
      /***/

    },

    /***/
    "mwRl":
    /*!**************************************!*\
      !*** ./src/app/shop/shop.service.ts ***!
      \**************************************/

    /*! exports provided: ShopService */

    /***/
    function mwRl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShopService", function () {
        return ShopService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/models/pagination */
      "UDJr");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/models/shopParams */
      "XJHN");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ShopService = /*#__PURE__*/function () {
        function ShopService(http) {
          _classCallCheck(this, ShopService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
          this.products = [];
          this.brands = [];
          this.types = [];
          this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_1__["Pagination"]();
          this.shopParams = new _shared_models_shopParams__WEBPACK_IMPORTED_MODULE_3__["ShopParams"]();
        }

        _createClass(ShopService, [{
          key: "getProducts",
          value: function getProducts(useCache) {
            var _this = this;

            if (useCache === false) {
              this.products = [];
            }

            if (this.products.length > 0 && useCache === true) {
              var pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);

              if (this.shopParams.pageNumber <= pagesReceived) {
                this.pagination.data = this.products.slice((this.shopParams.pageNumber - 1) * this.shopParams.pageSize, this.shopParams.pageNumber * this.shopParams.pageSize);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.pagination);
              }
            }

            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();

            if (this.shopParams.brandId !== 0) {
              params = params.append('brandId', this.shopParams.brandId.toString());
            }

            if (this.shopParams.typeId !== 0) {
              params = params.append('typeId', this.shopParams.typeId.toString());
            }

            if (this.shopParams.search) {
              params = params.append('search', this.shopParams.search);
            }

            params = params.append('sort', this.shopParams.sort);
            params = params.append('pageIndex', this.shopParams.pageNumber.toString());
            params = params.append('pageSize', this.shopParams.pageSize.toString());
            return this.http.get(this.baseUrl + 'products', {
              observe: 'response',
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this.products = [].concat(_toConsumableArray(_this.products), _toConsumableArray(response.body.data));
              _this.pagination = response.body;
              return _this.pagination;
            }));
          }
        }, {
          key: "getShopParams",
          value: function getShopParams() {
            return this.shopParams;
          }
        }, {
          key: "setShopParams",
          value: function setShopParams(params) {
            this.shopParams = params;
          }
        }, {
          key: "getProduct",
          value: function getProduct(id) {
            var product = this.products.find(function (p) {
              return p.id === id;
            });

            if (product) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(product);
            }

            return this.http.get(this.baseUrl + 'products/' + id);
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            var _this2 = this;

            if (this.brands.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.brands);
            }

            return this.http.get(this.baseUrl + 'products/brands').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this2.brands = response;
              return response;
            }));
          }
        }, {
          key: "getTypes",
          value: function getTypes() {
            var _this3 = this;

            if (this.types.length > 0) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.types);
            }

            return this.http.get(this.baseUrl + 'products/types').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this3.types = response;
              return response;
            }));
          }
        }]);

        return ShopService;
      }();

      ShopService.ɵfac = function ShopService_Factory(t) {
        return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: ShopService,
        factory: ShopService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map