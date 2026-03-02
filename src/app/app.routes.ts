import { Routes } from '@angular/router';
import { App } from './app';
import { Student } from './service/student';
import { StudentList } from './routing/rout/student-list/student-list';

export const routes: Routes = [
  //   { path: '', component: App },
  //   { path: 'list', component: StudentList },
  {
    path: '',
    loadComponent: () => import('./routing/rout/home-page/home-page').then((m) => m.HomePage),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./routing/rout/student-list/student-list').then((m) => m.StudentList),
  },
  {
    path: 'detail',
    loadComponent: () =>
      import('./routing/rout/student-detail/student-detail').then((m) => m.StudentDetail),
  },
];
