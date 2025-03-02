import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage2Component } from './quiz-page2.component';

describe('QuizPage2Component', () => {
  let component: QuizPage2Component;
  let fixture: ComponentFixture<QuizPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
