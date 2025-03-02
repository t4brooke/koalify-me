import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ResultCompSciComponent } from './result-comp-sci/result-comp-sci.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { QuizPage1Component } from './quiz-page1/quiz-page1.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SignupPageComponent,
    ResultCompSciComponent,
    ResumePageComponent,
    QuizPage1Component
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
