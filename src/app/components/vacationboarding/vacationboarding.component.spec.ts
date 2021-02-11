import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationboardingComponent } from './vacationboarding.component';

describe('VacationboardingComponent', () => {
  let component: VacationboardingComponent;
  let fixture: ComponentFixture<VacationboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
