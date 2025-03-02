import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ResultCompSciComponent } from './result-comp-sci/result-comp-sci.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { QuizPage1Component } from './quiz-page1/quiz-page1.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'results-compsci', component: ResultCompSciComponent},
  { path: 'resume', component: ResumePageComponent},
  { path: 'quiz-page1', component: QuizPage1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
