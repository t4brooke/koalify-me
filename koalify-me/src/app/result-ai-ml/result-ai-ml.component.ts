import { Component } from '@angular/core';

@Component({
  selector: 'app-result-ai-ml',
  standalone: false,
  templateUrl: './result-ai-ml.component.html',
  styleUrl: './result-ai-ml.component.css'
})
export class ResultAiMlComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
