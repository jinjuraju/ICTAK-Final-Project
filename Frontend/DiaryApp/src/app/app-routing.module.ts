import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdddiaryComponent } from './pages/diary/adddiary/adddiary.component';
import { EditdiaryComponent } from './pages/diary/editdiary/editdiary.component';
import { ViewalldiarysComponent } from './pages/diary/viewalldiarys/viewalldiarys.component';
import { ViewdiaryComponent } from './pages/diary/viewdiary/viewdiary.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes =
  [
    { path: 'adddiary', component: AdddiaryComponent },
    { path: '', component: ViewalldiarysComponent },
    // { path: 'browse', component: ViewalldiarysComponent },
    { path: 'view/:id', component: ViewdiaryComponent },
    { path: 'edit/:id', component: EditdiaryComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
