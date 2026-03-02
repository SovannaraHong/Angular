import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetching } from './fetching';

describe('Fetching', () => {
  let component: Fetching;
  let fixture: ComponentFixture<Fetching>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fetching]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fetching);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
