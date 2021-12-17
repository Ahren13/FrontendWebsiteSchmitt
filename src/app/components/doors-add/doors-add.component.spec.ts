import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsAddComponent } from './doors-add.component';

describe('DoorsAddComponent', () => {
  let component: DoorsAddComponent;
  let fixture: ComponentFixture<DoorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
