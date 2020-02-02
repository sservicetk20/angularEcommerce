import { NgModule } from '@angular/core';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductosRoutingModule } from './productos.routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        ProductosComponent,
        ProductsComponent,
        DetailProductsComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        ProductosRoutingModule,
        SharedModule,
        CoreModule,
        MaterialModule
    ]
})

export class ProductosModule {

}