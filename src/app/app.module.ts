import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormoneComponent } from './formone/formone.component';
import { FormtwoComponent } from './formtwo/formtwo.component';
import { FormthreeComponent } from './formthree/formthree.component';
import { FormfourComponent } from './formfour/formfour.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { VerificationComponent } from './verification/verification.component';
import { SignComponent } from './sign/sign.component';
import { RegistrationComponent } from './registration/registration.component';
import { Header1Component } from './header1/header1.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormoneComponent,
    FormtwoComponent,
    FormthreeComponent,
    FormfourComponent,
    WelcomepageComponent,
    VerificationComponent,
    SignComponent,
    RegistrationComponent,
    Header1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
