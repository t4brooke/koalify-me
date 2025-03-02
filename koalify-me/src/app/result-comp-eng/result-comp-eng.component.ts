import { Component } from '@angular/core';

@Component({
  selector: 'app-result-comp-eng',
  standalone: false,
  templateUrl: './result-comp-eng.component.html',
  styleUrl: './result-comp-eng.component.css'
})
export class ResultCompEngComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
