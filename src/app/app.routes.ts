import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./routing/homepage/homepage').then((m) => m.Homepage),
  // },
  // {
  //   path: 'product',
  //   loadComponent: () => import('./routing/product/product').then((m) => m.Product),
  // },
  // {
  //   path: 'product/:id',
  //   loadComponent: () => import('./routing/product/product').then((m) => m.Product),
  // },
  // {
  //   path: 'user',
  //   loadComponent: () => import('./routing/user/user').then((m) => m.User),
  // },
  // {
  //   path: 'productDetail/:id',
  //   loadComponent: () =>
  //     import('./routing/product-detail/product-detail').then((m) => m.ProductDetail),
  // },
  // {
  //   path: 'cash',
  //   loadComponent: () => import('./routing/cash/cash').then((m) => m.Cash),
  // },
  // {
  //   path: 'admin',
  //   loadComponent: () => import('./routing/admin/admin').then((m) => m.Admin),
  // },
  // {
  //   path: '**',
  //   loadComponent: () =>
  //     import('./routing/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  // },

  {
    path: '',
    loadComponent: () =>
      import('./employeeDashBoard/employee-home-page/employee-home-page').then(
        (m) => m.EmployeeHomePage,
      ),
  },

  {
    path: 'employee',
    loadComponent: () => import('./employeeDashBoard/employee/employee').then((m) => m.Employee),
  },
  {
    path: 'employeeDetail',
    loadComponent: () =>
      import('./employeeDashBoard/employee-detail/employee-detail').then((m) => m.EmployeeDetail),
  },
  {
    path: 'employeeDetail/:id',
    loadComponent: () =>
      import('./employeeDashBoard/employee-detail/employee-detail').then((m) => m.EmployeeDetail),
    children: [
      {
        path: 'imageEmployee',
        loadComponent: () =>
          import('./employeeDashBoard/employee-image/employee-image').then((m) => m.EmployeeImage),
      },
    ],
  },
];
