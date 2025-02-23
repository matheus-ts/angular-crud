import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) { }

  /* ao iniciar a pagina, faz uma requisicao get para o backend
    resgata os dados e os envia para o array products */
  ngOnInit(): void {
    this.productService.read().subscribe(products =>{
      this.products = products
      console.log(this.products)
    })
  }

}
