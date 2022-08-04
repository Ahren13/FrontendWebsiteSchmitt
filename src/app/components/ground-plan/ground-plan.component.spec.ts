import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundPlanComponent } from './ground-plan.component';

describe('GroundPlanComponent', () => {
  let component: GroundPlanComponent;
  let fixture: ComponentFixture<GroundPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroundPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroundPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
