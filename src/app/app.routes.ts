import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./routing/homepage/homepage').then((m) => m.Homepage),
  },
  {
    path: 'product',
    loadComponent: () => import('./routing/product/product').then((m) => m.Product),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./routing/product/product').then((m) => m.Product),
  },

  {
    path: 'user',
    loadComponent: () => import('./routing/user/user').then((m) => m.User),
  },

  {
    path: 'productDetail/:id',
    loadComponent: () =>
      import('./routing/product-detail/product-detail').then((m) => m.ProductDetail),
  },
  {
    path: 'cash',
    loadComponent: () => import('./routing/cash/cash').then((m) => m.Cash),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./routing/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
