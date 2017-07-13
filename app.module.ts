import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './app.component';
import {EmployeeComponent} from './employee-app.component';
import {AppComponent} from './person-app.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Services added through NgModule
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
