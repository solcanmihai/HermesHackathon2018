import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicChatComponent } from './medic-chat.component';

describe('MedicChatComponent', () => {
  let component: MedicChatComponent;
  let fixture: ComponentFixture<MedicChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
