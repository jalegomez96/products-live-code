import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsList } from '../interfaces/productsList';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URLBASE = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsList> {
    return this.http.get<ProductsList>(`${this.URLBASE}`)
  }

  createProduct(product: Partial<Product>) {
    return this.http.post(`${this.URLBASE}`,product)
  }

}
