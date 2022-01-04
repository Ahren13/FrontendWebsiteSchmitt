import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerDetailComponent } from './update-customer-detail.component';

describe('UpdateCustomerDetailComponent', () => {
  let component: UpdateCustomerDetailComponent;
  let fixture: ComponentFixture<UpdateCustomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCustomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
