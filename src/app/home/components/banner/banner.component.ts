import { Component, OnInit } from '@angular/core';
import {Image} from '../../../image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banners: Image[] = [
    {
      src: '../../../assets/images/banner-1.jpg',
      alt: 'Cloud Atlas Banner'
    },
    {
      src: '../../../assets/images/banner-2.jpg',
      alt: 'Glass Banner'
    },
    {
      src: '../../../assets/images/banner-3.jpg',
      alt: 'Inception Banner'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
