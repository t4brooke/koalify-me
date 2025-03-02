import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAiMlComponent } from './result-ai-ml.component';

describe('ResultAiMlComponent', () => {
  let component: ResultAiMlComponent;
  let fixture: ComponentFixture<ResultAiMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultAiMlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultAiMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
