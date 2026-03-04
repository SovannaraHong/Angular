import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeImage } from './employee-image';

describe('EmployeeImage', () => {
  let component: EmployeeImage;
  let fixture: ComponentFixture<EmployeeImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
