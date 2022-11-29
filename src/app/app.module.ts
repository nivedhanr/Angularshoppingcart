import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import {HttpClientModule} from '@angular/common/http';
const myRoute:Routes=[
  {
    path:"",
    component:AddproductComponent
  },
  {
    path:"view",
    component:ViewproductComponent
  },
  {

    path:"news",

    component:ViewnewsComponent

  }

  
]
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductComponent,
    NavbarComponent,
    ViewnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
