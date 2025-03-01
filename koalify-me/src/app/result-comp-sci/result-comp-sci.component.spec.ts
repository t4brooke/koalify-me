import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCompSciComponent } from './result-comp-sci.component';

describe('ResultCompSciComponent', () => {
  let component: ResultCompSciComponent;
  let fixture: ComponentFixture<ResultCompSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultCompSciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCompSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
