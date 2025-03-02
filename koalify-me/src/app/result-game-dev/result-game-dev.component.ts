import { Component } from '@angular/core';

@Component({
  selector: 'app-result-game-dev',
  standalone: false,
  templateUrl: './result-game-dev.component.html',
  styleUrl: './result-game-dev.component.css'
})
export class ResultGameDevComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
