import { UpsertUserComponent } from './upsert-user/upsert-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',component: UsersComponent,
    children:[
      {
        path:'',component: ListUserComponent
      },
      {
        path:'create', component: UpsertUserComponent
      },
      {
        path:'detail/:id',component: DetailUserComponent
      },
      {
        path:'edit/:id',component: UpsertUserComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UsersRoutingModule { }
