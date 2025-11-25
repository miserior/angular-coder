import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosForm } from './cursos-form';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from '../cursos-routing-module';
import { SharedModule } from '../../../../shared/shared-module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('CursosForm', () => {
  let component: CursosForm;
  let fixture: ComponentFixture<CursosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursosForm],
      imports: [CommonModule, CursosRoutingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {
                get: () => null,
              },
            },
          },
        },
          provideHttpClient(withFetch()),
        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CursosForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
