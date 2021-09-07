import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailInputOutputComponent } from './employee-detail-input-output.component';

describe('EmployeeDetailInputOutputComponent', () => {
  let component: EmployeeDetailInputOutputComponent;
  let fixture: ComponentFixture<EmployeeDetailInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
