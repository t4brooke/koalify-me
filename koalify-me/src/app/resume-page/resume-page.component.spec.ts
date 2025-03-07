import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePageComponent } from './resume-page.component';

describe('ResumePageComponent', () => {
  let component: ResumePageComponent;
  let fixture: ComponentFixture<ResumePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
