import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products/";

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(msg: string) : void{
    // cria a animacao da mensagem e o X cria uma interacao para fecha-la
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)    
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
