
import { EditAwesomeComponent } from './edit-awesome/edit-awesome.component';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwesomesComponent } from './awesomes/awesomes.component';

const routes: Routes = [
  {
    path:'',
   component:AwesomesComponent
  },
  {
    path:'create',
    component: CreateAwesomeComponent
  },
  {
    path:':id',
    component: EditAwesomeComponent
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
