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
import { ResumeFeedbackComponent } from './resume-feedback/resume-feedback.component';
import { ResultSoftEngComponent } from './result-soft-eng/result-soft-eng.component';
import { ResultCyberComponent } from './result-cyber/result-cyber.component';
import { ResultInfoSysComponent } from './result-info-sys/result-info-sys.component';
import { ResultGameDevComponent } from './result-game-dev/result-game-dev.component';
import { ResultUiUxComponent } from './result-ui-ux/result-ui-ux.component';
import { ResultDataSciComponent } from './result-data-sci/result-data-sci.component';
import { ResultInfoTechComponent } from './result-info-tech/result-info-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    SignupPageComponent,
    ResultCompSciComponent,
    ResumePageComponent,
    QuizPage1Component,
    ResumeFeedbackComponent,
    ResultSoftEngComponent,
    ResultCyberComponent,
    ResultInfoSysComponent,
    ResultGameDevComponent,
    ResultUiUxComponent,
    ResultDataSciComponent,
    ResultInfoTechComponent
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
