import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicOrderComponent } from './medic-order.component';

describe('MedicOrderComponent', () => {
  let component: MedicOrderComponent;
  let fixture: ComponentFixture<MedicOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
