import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeFormComponent } from './pasaje-form.component';

describe('PasajeFormComponent', () => {
  let component: PasajeFormComponent;
  let fixture: ComponentFixture<PasajeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
