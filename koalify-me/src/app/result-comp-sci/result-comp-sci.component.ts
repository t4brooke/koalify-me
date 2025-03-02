import { Component } from '@angular/core';

@Component({
  selector: 'app-result-comp-sci',
  standalone: false,
  templateUrl: './result-comp-sci.component.html',
  styleUrl: './result-comp-sci.component.css'
})
export class ResultCompSciComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
