import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCyberComponent } from './result-cyber.component';

describe('ResultCyberComponent', () => {
  let component: ResultCyberComponent;
  let fixture: ComponentFixture<ResultCyberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultCyberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCyberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
