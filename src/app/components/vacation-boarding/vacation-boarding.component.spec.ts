import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationBoardingComponent } from './vacation-boarding.component';

describe('VacationBoardingComponent', () => {
  let component: VacationBoardingComponent;
  let fixture: ComponentFixture<VacationBoardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationBoardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
