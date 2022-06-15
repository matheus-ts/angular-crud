import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // evento de click que passa o path de outro modulo
  // basicamente faz a funcao de um hiperlink mas em um botao
  navigateToProductCreate(): void{
    this.router.navigate(['/products/create'])
  }
}
