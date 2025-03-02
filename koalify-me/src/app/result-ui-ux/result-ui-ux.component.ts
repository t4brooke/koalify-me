import { Component } from '@angular/core';

@Component({
  selector: 'app-result-ui-ux',
  standalone: false,
  templateUrl: './result-ui-ux.component.html',
  styleUrl: './result-ui-ux.component.css'
})
export class ResultUiUxComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
