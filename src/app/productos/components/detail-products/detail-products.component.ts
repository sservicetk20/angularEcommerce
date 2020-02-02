import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.sass']
})
export class DetailProductsComponent implements OnInit {

  product: Product[] = [];

  constructor(private route:ActivatedRoute,private Api:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
     const id = params.id;
     this.fetchProduct(id);
    });
  }

   fetchProduct(id: string){
     this.Api.getProduct(id).subscribe(data=>{
       this.product = data;
       console.log('info un producto',this.product);
     })
   }

  CreateProduct() {
     const newProduct: Product = {
       id: '222',
       title: 'nuevo producto',
       image: 'assets/images/mug.png',
       price: 80000,
       description: "bla bla bla bla bla"
     };
     this.Api.createProduct(newProduct).subscribe(data=>{
       console.log('producto creado');
     })
   }

  UpdateProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo producto 4',
      image: 'assets/images/mug.png',
      price: 190000,
      description: "descripcion producto"
    };
    this.Api.updateProduct(newProduct.id,newProduct).subscribe(data=>{
      console.log('producto creado');
    })
  }

  DeleteProduct(){
    this.Api.deleteProduct('222').subscribe(data=>{
      console.log(data);
    })
  }

}
