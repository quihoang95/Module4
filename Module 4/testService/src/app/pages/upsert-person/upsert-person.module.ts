import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertPersonComponent } from './upsert-person.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'create',
    component: UpsertPersonComponent
  },
  {
    path: ':id/edit',
    component: UpsertPersonComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

    // UI Modules
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ],
  declarations: [UpsertPersonComponent]
})
export class UpsertPersonModule { }
