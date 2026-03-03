import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService, ProductType } from '../../service/product-service';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product implements OnInit {
  productList$!: Observable<ProductType[]>;
  loading = true;
  constructor(
    private productService: ProductService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.productList$ = this.productService.getProducts();
  }
}
