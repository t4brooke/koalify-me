import { Component } from '@angular/core';

@Component({
  selector: 'app-result-soft-eng',
  standalone: false,
  templateUrl: './result-soft-eng.component.html',
  styleUrl: './result-soft-eng.component.css'
})
export class ResultSoftEngComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
