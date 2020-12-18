import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'splash',
  //   pathMatch: 'full'
  // },
  {
    path: 'about',
    loadChildren: () => import('./pages/about.page.module').then(m => m.AboutPageModule),
  },
  {
    path: 'frontend',
    loadChildren: () => import('./pages/frontend.page.module').then(m => m.FrontEndPageModule),
  },
  {
    path: 'me',
    loadChildren: () => import('./pages/me.page.module').then(m => m.MePageModule),
  },
  {
    path: 'career',
    loadChildren: () => import('./pages/career.page.module').then(m => m.CareerPageModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin.page.module').then(m => m.AdminPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
