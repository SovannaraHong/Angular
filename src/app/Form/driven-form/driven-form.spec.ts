import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenForm } from './driven-form';

describe('DrivenForm', () => {
  let component: DrivenForm;
  let fixture: ComponentFixture<DrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivenForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
