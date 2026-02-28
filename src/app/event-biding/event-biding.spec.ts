import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBiding } from './event-biding';

describe('EventBiding', () => {
  let component: EventBiding;
  let fixture: ComponentFixture<EventBiding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBiding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBiding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
