import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }

  addProduct(form:any){
    return this.http.post(`https://fakestoreapi.com/products`,form)
  }

  productDetails(product_id:any){
    return this.http.get(`https://fakestoreapi.com/products/${product_id}`)
  }
}
