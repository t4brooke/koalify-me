import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGameDevComponent } from './result-game-dev.component';

describe('ResultGameDevComponent', () => {
  let component: ResultGameDevComponent;
  let fixture: ComponentFixture<ResultGameDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultGameDevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultGameDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
