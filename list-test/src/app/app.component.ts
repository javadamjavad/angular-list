import { Component,OnInit } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'grid-list';

  products:Product[]

  constructor(private productService:ProductService){}

  ngOnInit() {
    this.getProductList()
  }

  getProductList(){
    this.productService.getProducts().then(res=>{
      console.log(res,'sssssssssss')
      this.products = res
    })
  }
}
