import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddiaryComponent } from './pages/diary/adddiary/adddiary.component';
import { ViewalldiarysComponent } from './pages/diary/viewalldiarys/viewalldiarys.component';
import { ViewdiaryComponent } from './pages/diary/viewdiary/viewdiary.component';
import { EditdiaryComponent } from './pages/diary/editdiary/editdiary.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdddiaryComponent,
    ViewalldiarysComponent,
    ViewdiaryComponent,
    EditdiaryComponent,
    RegisterComponent,
    LoginComponent,
    AdddiaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
