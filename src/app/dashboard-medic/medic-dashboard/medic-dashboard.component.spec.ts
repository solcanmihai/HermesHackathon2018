import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicDashboardComponent } from './medic-dashboard.component';

describe('MedicDashboardComponent', () => {
  let component: MedicDashboardComponent;
  let fixture: ComponentFixture<MedicDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
