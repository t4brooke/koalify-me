import { Component } from '@angular/core';

@Component({
  selector: 'app-result-data-sci',
  standalone: false,
  templateUrl: './result-data-sci.component.html',
  styleUrl: './result-data-sci.component.css'
})
export class ResultDataSciComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
