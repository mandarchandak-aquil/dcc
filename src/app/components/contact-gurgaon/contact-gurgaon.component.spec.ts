import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGurgaonComponent } from './contact-gurgaon.component';

describe('ContactGurgaonComponent', () => {
  let component: ContactGurgaonComponent;
  let fixture: ComponentFixture<ContactGurgaonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGurgaonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGurgaonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
