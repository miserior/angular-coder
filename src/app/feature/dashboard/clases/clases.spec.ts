import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clases } from './clases';

describe('Clases', () => {
  let component: Clases;
  let fixture: ComponentFixture<Clases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Clases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
