import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise2extendedComponent } from './exercise2extended.component';

describe('Exercise2extendedComponent', () => {
  let component: Exercise2extendedComponent;
  let fixture: ComponentFixture<Exercise2extendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exercise2extendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise2extendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
