import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: false,
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Prevent form submission if no username or password
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are both required';
      return;
    }
    this.errorMessage = '';

    // Navigate to the quiz page after successful submission
    this.router.navigate(['/quiz-page1']);
  }
}
