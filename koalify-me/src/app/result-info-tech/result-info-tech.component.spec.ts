import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInfoTechComponent } from './result-info-tech.component';

describe('ResultInfoTechComponent', () => {
  let component: ResultInfoTechComponent;
  let fixture: ComponentFixture<ResultInfoTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultInfoTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultInfoTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
