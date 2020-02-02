import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  product: Product[] = [];
  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor(private Api:ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.Api.getAllProducts().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }

  fetchProduct(id: string){
    this.Api.getProduct(id).subscribe(data=>{
      this.product = data;
      console.log('info un producto',this.product);
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

 DeleteProduct(id: string){
   console.log(id);
   this.Api.deleteProduct(id).subscribe(data=>{
     console.log(data);
   }) 
 }

}
