import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCompEngComponent } from './result-comp-eng.component';

describe('ResultCompEngComponent', () => {
  let component: ResultCompEngComponent;
  let fixture: ComponentFixture<ResultCompEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultCompEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCompEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
