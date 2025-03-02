import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFeedbackComponent } from './resume-feedback.component';

describe('ResumeFeedbackComponent', () => {
  let component: ResumeFeedbackComponent;
  let fixture: ComponentFixture<ResumeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
