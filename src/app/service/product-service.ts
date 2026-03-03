import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
}

export interface ProductResponse {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductResponse>(this.url).pipe(map((response) => response.products));
  }
  getProductById(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`${this.url}/${id}`);
  }
}
