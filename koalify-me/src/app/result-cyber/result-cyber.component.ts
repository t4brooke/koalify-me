import { Component } from '@angular/core';

@Component({
  selector: 'app-result-cyber',
  standalone: false,
  templateUrl: './result-cyber.component.html',
  styleUrl: './result-cyber.component.css'
})
export class ResultCyberComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
