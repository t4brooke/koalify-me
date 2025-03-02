import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ResultCompSciComponent } from './result-comp-sci/result-comp-sci.component';
import { ResultSoftEngComponent } from './result-soft-eng/result-soft-eng.component';
import { ResultCyberComponent } from './result-cyber/result-cyber.component';
import { ResultInfoSysComponent } from './result-info-sys/result-info-sys.component';
import { ResultGameDevComponent } from './result-game-dev/result-game-dev.component';
import { ResultUiUxComponent } from './result-ui-ux/result-ui-ux.component';
import { ResultDataSciComponent } from './result-data-sci/result-data-sci.component';
import { ResultInfoTechComponent } from './result-info-tech/result-info-tech.component';
import { ResultAiMlComponent } from './result-ai-ml/result-ai-ml.component';
import { ResultCompEngComponent } from './result-comp-eng/result-comp-eng.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { QuizPage1Component } from './quiz-page1/quiz-page1.component';
import { ResumeFeedbackComponent } from './resume-feedback/resume-feedback.component';
import { QuizPage2Component } from './quiz-page2/quiz-page2.component';
import { QuizPage3Component } from './quiz-page3/quiz-page3.component';

const routes: Routes = [
  { path: 'home', component: WelcomePageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'results-compsci', component: ResultCompSciComponent},
  { path: 'results-softeng', component: ResultSoftEngComponent},
  { path: 'results-cyber', component: ResultCyberComponent},
  { path: 'results-info-sys', component: ResultInfoSysComponent},
  { path: 'results-game-dev', component: ResultGameDevComponent},
  { path: 'results-ui-ux', component: ResultUiUxComponent},
  { path: 'results-data-sci', component: ResultDataSciComponent},
  { path: 'results-info-tech', component: ResultInfoTechComponent},
  { path: 'results-ai-ml', component: ResultAiMlComponent},
  { path: 'results-comp-eng', component: ResultCompEngComponent},
  { path: 'resume', component: ResumePageComponent},
  { path: 'quiz-page1', component: QuizPage1Component},
  { path: 'resume-feedback', component: ResumeFeedbackComponent},
  { path: 'quiz-page2', component: QuizPage2Component},
  { path: 'quiz-page3', component: QuizPage3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
