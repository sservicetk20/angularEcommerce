import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit {

  title = 'AngularEcommerce';
  nombre:any;
  power = 10;

  items = ['juan', 'pedro', 'nicolas'];

  constructor() { }

  ngOnInit() {
  }

  AddItem(){
    this.items.push('nuevo');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
