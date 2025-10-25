import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosForm } from './cursos-form';

describe('CursosForm', () => {
  let component: CursosForm;
  let fixture: ComponentFixture<CursosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
