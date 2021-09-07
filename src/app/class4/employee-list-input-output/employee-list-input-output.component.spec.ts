import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListInputOutputComponent } from './employee-list-input-output.component';

describe('EmployeeListInputOutputComponent', () => {
  let component: EmployeeListInputOutputComponent;
  let fixture: ComponentFixture<EmployeeListInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
