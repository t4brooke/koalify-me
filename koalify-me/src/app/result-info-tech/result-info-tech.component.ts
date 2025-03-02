import { Component } from '@angular/core';

@Component({
  selector: 'app-result-info-tech',
  standalone: false,
  templateUrl: './result-info-tech.component.html',
  styleUrl: './result-info-tech.component.css'
})
export class ResultInfoTechComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
