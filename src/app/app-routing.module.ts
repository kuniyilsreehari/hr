import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { FormthreeComponent } from './formthree/formthree.component';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VerificationComponent } from './verification/verification.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [

  {
    path: '', component: WelcomepageComponent
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'registration', component: RegistrationComponent
  },


  {
    path: 'formone', component: FormoneComponent
  },
  {
    path: 'formtwo', component: FormtwoComponent
  },
  {
    path: 'formthree', component: FormthreeComponent
  },

  {
    path:'verification' , component:VerificationComponent
  },

  {
    path:'employee' , component:EmployeeComponent
  },
  {
    path:'notification' , component:NotificationComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
