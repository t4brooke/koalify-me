import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDataSciComponent } from './result-data-sci.component';

describe('ResultDataSciComponent', () => {
  let component: ResultDataSciComponent;
  let fixture: ComponentFixture<ResultDataSciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultDataSciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDataSciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
