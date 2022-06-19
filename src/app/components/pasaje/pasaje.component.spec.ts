import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajeComponent } from './pasaje.component';

describe('PasajeComponent', () => {
  let component: PasajeComponent;
  let fixture: ComponentFixture<PasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
