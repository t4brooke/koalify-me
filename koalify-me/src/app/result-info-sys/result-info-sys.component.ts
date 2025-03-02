import { Component } from '@angular/core';

@Component({
  selector: 'app-result-info-sys',
  standalone: false,
  templateUrl: './result-info-sys.component.html',
  styleUrl: './result-info-sys.component.css'
})
export class ResultInfoSysComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
