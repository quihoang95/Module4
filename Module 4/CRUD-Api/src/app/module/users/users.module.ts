import { UpsertUserComponent } from './upsert-user/upsert-user.component';

import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzFormModule

  ],
  declarations: [UsersComponent,ListUserComponent,DetailUserComponent,UpsertUserComponent]
})
export class UsersModule { }
