import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ResultCompSciComponent } from './result-comp-sci/result-comp-sci.component';
import { ResumePageComponent } from './resume-page/resume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SignupPageComponent,
    ResultCompSciComponent,
    ResumePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
