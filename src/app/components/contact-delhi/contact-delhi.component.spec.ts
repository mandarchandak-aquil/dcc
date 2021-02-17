import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDelhiComponent } from './contact-delhi.component';

describe('ContactDelhiComponent', () => {
  let component: ContactDelhiComponent;
  let fixture: ComponentFixture<ContactDelhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDelhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
