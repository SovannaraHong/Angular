import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductType } from '../../service/product-service';
import { Observable, switchMap } from 'rxjs';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  productDetailList$!: Observable<ProductType>;
  constructor(
    private ActiveRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    this.productDetailList$ = this.ActiveRoute.paramMap.pipe(
      switchMap((param) => this.productService.getProductById(Number(param.get('id')))),
    );
  }
}
