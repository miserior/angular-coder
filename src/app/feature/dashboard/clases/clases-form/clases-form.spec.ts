import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesForm } from './clases-form';

describe('ClasesForm', () => {
  let component: ClasesForm;
  let fixture: ComponentFixture<ClasesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
