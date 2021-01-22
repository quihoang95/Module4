import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListReadComponent } from './components/list-read/list-read.component';
import { ListUnreadComponent } from './components/list-unread/list-unread.component';

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const appRoutes:Routes = [
  {path:"", component:HomeComponent},
  {path:"listread", component:ListReadComponent},
  {path:"listunread", component:ListUnreadComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListReadComponent,
    ListUnreadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
