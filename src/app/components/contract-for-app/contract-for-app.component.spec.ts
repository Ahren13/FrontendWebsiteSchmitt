import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractForAppComponent } from './contract-for-app.component';

describe('ContractForAppComponent', () => {
  let component: ContractForAppComponent;
  let fixture: ComponentFixture<ContractForAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractForAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractForAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
