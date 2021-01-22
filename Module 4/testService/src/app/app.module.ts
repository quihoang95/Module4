import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/component/header/header.component';
import { Error404Component } from './shared/error-page/error-404/error-404.component';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';

registerLocaleData(vi);
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/list-person/list-person.module').then(
        (m) => m.ListPersonModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details-person/details-person.module').then(
        (m) => m.DetailsPersonModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/upsert-person/upsert-person.module').then(
        (m) => m.UpsertPersonModule
      ),
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  declarations: [AppComponent, HeaderComponent, Error404Component],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    // UI Modules
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
