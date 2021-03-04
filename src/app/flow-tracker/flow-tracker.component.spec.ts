import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowTrackerComponent } from './flow-tracker.component';

describe('FlowTrackerComponent', () => {
  let component: FlowTrackerComponent;
  let fixture: ComponentFixture<FlowTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
