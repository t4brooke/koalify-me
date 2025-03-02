import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage3Component } from './quiz-page3.component';

describe('QuizPage3Component', () => {
  let component: QuizPage3Component;
  let fixture: ComponentFixture<QuizPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPage3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
