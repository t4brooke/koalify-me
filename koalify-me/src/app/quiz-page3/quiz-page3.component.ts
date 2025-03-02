import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page3',
  standalone: false,
  templateUrl: './quiz-page3.component.html',
  styleUrl: './quiz-page3.component.css'
})
export class QuizPage3Component {
  constructor(private router: Router) { }

  onSubmit(): void {
    const resultPages = [
      '/results-game-dev',
      '/results-compsci',
      '/results-ui-ux',
      '/results-cyber',
      '/results-softeng',
      '/results-info-sys',
      '/results-info-tech',
      '/results-ai-ml',
      '/results-comp-eng',
      '/results-data-sci'
    ];

    const randomPage = resultPages[Math.floor(Math.random() * resultPages.length)];

    this.router.navigate([randomPage]);
  }
}
