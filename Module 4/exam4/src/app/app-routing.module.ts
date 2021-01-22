import { UnreadComponent } from './module/books/unread/unread.component';
import { ReadComponent } from './module/books/read/read.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'unread',
    pathMatch: 'full',
  },
  {
    path:'read',
    component: ReadComponent
  },
  {
    path:'unread',
    component: UnreadComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
