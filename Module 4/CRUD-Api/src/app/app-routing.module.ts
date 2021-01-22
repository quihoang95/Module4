import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./module/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'error-not-found',
    loadChildren: () =>
      import('./shared/pages/erros404/erros404.module').then(
        (m) => m.Erros404Module
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
