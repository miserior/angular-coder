import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos } from './cursos';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing-module';
import { SharedModule } from '../../../shared/shared-module';

describe('Cursos', () => {
  let component: Cursos;
  let fixture: ComponentFixture<Cursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cursos],
      imports: [CommonModule, CursosRoutingModule, SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Cursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
