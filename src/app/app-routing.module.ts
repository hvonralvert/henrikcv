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
    loadChildren: './pages/about.page.module#AboutPageModule',
  },
  {
    path: 'frontend',
    loadChildren: './pages/frontend.page.module#FrontEndPageModule',
  },
  {
    path: 'me',
    loadChildren: './pages/me.page.module#MePageModule',
  },
  {
    path: 'contact',
    loadChildren: './pages/contact.page.module#ContactPageModule',
  },
  {
    path: 'career',
    loadChildren: './pages/career.page.module#CareerPageModule',
  },
  {
    path: 'admin',
    loadChildren: './pages/admin.page.module#AdminPageModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
