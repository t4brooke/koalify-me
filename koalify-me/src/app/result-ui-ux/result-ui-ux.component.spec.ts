import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUiUxComponent } from './result-ui-ux.component';

describe('ResultUiUxComponent', () => {
  let component: ResultUiUxComponent;
  let fixture: ComponentFixture<ResultUiUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultUiUxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultUiUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
