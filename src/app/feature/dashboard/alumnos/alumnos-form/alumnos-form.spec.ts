import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosForm } from './alumnos-form';

describe('AlumnosForm', () => {
  let component: AlumnosForm;
  let fixture: ComponentFixture<AlumnosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnosForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
