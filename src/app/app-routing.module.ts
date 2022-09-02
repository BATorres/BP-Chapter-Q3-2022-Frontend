import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'comics',
    loadChildren: () => import('./modules/comic/comic.module').then(module => module.ComicModule),
  },
  {
    path: '',
    redirectTo: 'comics',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'comics',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
