import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHomePage } from './employee-home-page';

describe('EmployeeHomePage', () => {
  let component: EmployeeHomePage;
  let fixture: ComponentFixture<EmployeeHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
