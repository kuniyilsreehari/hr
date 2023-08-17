import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { FormthreeComponent } from './formthree/formthree.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { VerificationComponent } from './verification/verification.component';
import { RegistrationComponent } from './registration/registration.component';
import { Header1Component } from './header1/header1.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { Header2Component } from './header2/header2.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormoneComponent,
    FormtwoComponent,
    FormthreeComponent,
    WelcomepageComponent,
    VerificationComponent,
    RegistrationComponent,
    Header1Component,
    LoginComponent,
    EmployeeComponent,
    Header2Component,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
