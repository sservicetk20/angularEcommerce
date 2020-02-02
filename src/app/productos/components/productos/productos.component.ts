import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  cart = [];

  constructor(private cartService: CartService) { }

  @Input() product: Product;
  @Output() AddCartClick: EventEmitter<any> = new EventEmitter();

  addCart(index){
    //this.AddCartClick.emit(this.product.id);
    this.cartService.addCart(this.product);
  }


  ngOnInit() {
  }

}
