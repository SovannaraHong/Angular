import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Structuring } from './structuring';

describe('Structuring', () => {
  let component: Structuring;
  let fixture: ComponentFixture<Structuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Structuring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Structuring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
