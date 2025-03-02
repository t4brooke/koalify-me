import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPage1Component } from './quiz-page1.component';

describe('QuizPage1Component', () => {
  let component: QuizPage1Component;
  let fixture: ComponentFixture<QuizPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
