import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInfoSysComponent } from './result-info-sys.component';

describe('ResultInfoSysComponent', () => {
  let component: ResultInfoSysComponent;
  let fixture: ComponentFixture<ResultInfoSysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultInfoSysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultInfoSysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
