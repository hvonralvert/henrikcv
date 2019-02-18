import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: './pages/home.page.module#HomePageModule',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
