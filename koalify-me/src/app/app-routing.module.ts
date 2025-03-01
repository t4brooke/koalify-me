import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'signup', component: SignupPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
