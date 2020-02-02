import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products.service';



@Component({
  selector: 'app-produucts',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [];


  constructor(private Api:ProductsService) { }

  ngOnInit() {
    //this.products = this.Api.getAllProducts();
    this.fetchProducts();
  }

  ClickProduct(id: number){
    console.log('id producto output',id);
  }

  fetchProducts(){
    this.Api.getAllProducts().subscribe(data=>{
      this.products = data;
      console.log(this.products);
    })
  }

}
