import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleServiceComponent } from './schedule-service.component';

describe('ScheduleServiceComponent', () => {
  let component: ScheduleServiceComponent;
  let fixture: ComponentFixture<ScheduleServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleServiceComponent]
    });
    fixture = TestBed.createComponent(ScheduleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
