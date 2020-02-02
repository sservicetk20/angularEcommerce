(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productos-productos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/cart/cart.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/cart/cart.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cart works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/detail-products/detail-products.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/detail-products/detail-products.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"product\">\n    <div>\n        <img [src]=\"product.image\" alt=\"\">\n    </div>\n    <div>\n        <ul>\n            <li>Nombre: {{product.title}}</li>\n            <li>Precio: {{product.price}}</li>\n        </ul>\n        <p>{{product.description}}</p>\n    </div>\n    <a mat-raised-button (click)=\"CreateProduct()\">crear producto</a>\n    <a mat-raised-button (click)=\"UpdateProduct()\">actualizar producto</a>\n    <a mat-raised-button (click)=\"DeleteProduct()\">borrar</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/productos/productos.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/productos/productos.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{product.title | uppercase }}</mat-card-title>\n      <mat-card-subtitle>{{product.price | currency}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"crop-image\">\n        <img mat-card-image [src]=\"product.image\" alt=\"product\">\n      </div>\n      <p>{{product.description | slice:0:10 }}</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-raised-button color=\"primary\" (click)=\"addCart(product)\">Añadir al carrito</button>\n        <a mat-raised-button [routerLink]=\"['/products/',product.id]\">Ver Mas</a>\n    </mat-card-actions>\n  </mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/products/products.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/products/products.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"product-grid\">\n    <app-productos\n      *ngFor=\"let product of products\"\n      (AddCartClick)=\"ClickProduct($event)\"\n      [product]=\"product\"\n    >\n    </app-productos>\n  </div>\n  ");

/***/ }),

/***/ "./src/app/productos/components/cart/cart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/productos/components/cart/cart.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy9jb21wb25lbnRzL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/productos/components/cart/cart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/productos/components/cart/cart.component.ts ***!
  \*************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.scss */ "./src/app/productos/components/cart/cart.component.scss")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/productos/components/detail-products/detail-products.component.sass":
/*!*************************************************************************************!*\
  !*** ./src/app/productos/components/detail-products/detail-products.component.sass ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy9jb21wb25lbnRzL2RldGFpbC1wcm9kdWN0cy9kZXRhaWwtcHJvZHVjdHMuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/productos/components/detail-products/detail-products.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/productos/components/detail-products/detail-products.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProductsComponent", function() { return DetailProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/products.service */ "./src/app/core/services/products.service.ts");




let DetailProductsComponent = class DetailProductsComponent {
    constructor(route, Api) {
        this.route = route;
        this.Api = Api;
        this.product = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params.id;
            this.fetchProduct(id);
        });
    }
    fetchProduct(id) {
        this.Api.getProduct(id).subscribe(data => {
            this.product = data;
            console.log('info un producto', this.product);
        });
    }
    CreateProduct() {
        const newProduct = {
            id: '222',
            title: 'nuevo producto',
            image: 'assets/images/mug.png',
            price: 80000,
            description: "bla bla bla bla bla"
        };
        this.Api.createProduct(newProduct).subscribe(data => {
            console.log('producto creado');
        });
    }
    UpdateProduct() {
        const newProduct = {
            id: '222',
            title: 'nuevo producto 4',
            image: 'assets/images/mug.png',
            price: 190000,
            description: "descripcion producto"
        };
        this.Api.updateProduct(newProduct.id, newProduct).subscribe(data => {
            console.log('producto creado');
        });
    }
    DeleteProduct() {
        this.Api.deleteProduct('222').subscribe(data => {
            console.log(data);
        });
    }
};
DetailProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
DetailProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/detail-products/detail-products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail-products.component.sass */ "./src/app/productos/components/detail-products/detail-products.component.sass")).default]
    })
], DetailProductsComponent);



/***/ }),

/***/ "./src/app/productos/components/productos/productos.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/productos/components/productos/productos.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop-image {\n  height: 300px;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.crop-image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdG9zL2NvbXBvbmVudHMvcHJvZHVjdG9zL0M6XFx4YW1wcFxcaHRkb2NzXFxBbmd1bGFyRWNvbW1lcmNlL3NyY1xcYXBwXFxwcm9kdWN0b3NcXGNvbXBvbmVudHNcXHByb2R1Y3Rvc1xccHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0b3MvY29tcG9uZW50cy9wcm9kdWN0b3MvcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsZUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdG9zL2NvbXBvbmVudHMvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wLWltYWdle1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9IiwiLmNyb3AtaW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNyb3AtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/productos/components/productos/productos.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/productos/components/productos/productos.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/cart.service */ "./src/app/core/services/cart.service.ts");



let ProductosComponent = class ProductosComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cart = [];
        this.AddCartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    addCart(index) {
        //this.AddCartClick.emit(this.product.id);
        this.cartService.addCart(this.product);
    }
    ngOnInit() {
    }
};
ProductosComponent.ctorParameters = () => [
    { type: src_app_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductosComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductosComponent.prototype, "AddCartClick", void 0);
ProductosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/productos/productos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./productos.component.scss */ "./src/app/productos/components/productos/productos.component.scss")).default]
    })
], ProductosComponent);



/***/ }),

/***/ "./src/app/productos/components/products/products.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/productos/components/products/products.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3Rvcy9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/productos/components/products/products.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/productos/components/products/products.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/products.service */ "./src/app/core/services/products.service.ts");



let ProductsComponent = class ProductsComponent {
    constructor(Api) {
        this.Api = Api;
        this.products = [];
    }
    ngOnInit() {
        //this.products = this.Api.getAllProducts();
        this.fetchProducts();
    }
    ClickProduct(id) {
        console.log('id producto output', id);
    }
    fetchProducts() {
        this.Api.getAllProducts().subscribe(data => {
            this.products = data;
            console.log(this.products);
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_core_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-produucts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/productos/components/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/productos/components/products/products.component.scss")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/productos/productos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/productos/productos.module.ts ***!
  \***********************************************/
/*! exports provided: ProductosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/productos/productos.component */ "./src/app/productos/components/productos/productos.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/productos/components/products/products.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/productos/components/cart/cart.component.ts");
/* harmony import */ var _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos.routing.module */ "./src/app/productos/productos.routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_detail_products_detail_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detail-products/detail-products.component */ "./src/app/productos/components/detail-products/detail-products.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");











let ProductosModule = class ProductosModule {
};
ProductosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_productos_productos_component__WEBPACK_IMPORTED_MODULE_2__["ProductosComponent"],
            _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
            _components_detail_products_detail_products_component__WEBPACK_IMPORTED_MODULE_9__["DetailProductsComponent"],
            _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _productos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
        ]
    })
], ProductosModule);



/***/ }),

/***/ "./src/app/productos/productos.routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/productos/productos.routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosRoutingModule", function() { return ProductosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/productos/components/products/products.component.ts");
/* harmony import */ var _components_detail_products_detail_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detail-products/detail-products.component */ "./src/app/productos/components/detail-products/detail-products.component.ts");





const routes = [
    {
        path: '',
        component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
    },
    {
        path: ':id',
        component: _components_detail_products_detail_products_component__WEBPACK_IMPORTED_MODULE_4__["DetailProductsComponent"]
    },
];
let ProductosRoutingModule = class ProductosRoutingModule {
};
ProductosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProductosRoutingModule);



/***/ })

}]);
//# sourceMappingURL=productos-productos-module-es2015.js.map