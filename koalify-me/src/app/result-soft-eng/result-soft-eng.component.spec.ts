import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSoftEngComponent } from './result-soft-eng.component';

describe('ResultSoftEngComponent', () => {
  let component: ResultSoftEngComponent;
  let fixture: ComponentFixture<ResultSoftEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultSoftEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultSoftEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
