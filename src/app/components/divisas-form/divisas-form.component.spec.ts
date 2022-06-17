import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisasFormComponent } from './divisas-form.component';

describe('DivisasFormComponent', () => {
  let component: DivisasFormComponent;
  let fixture: ComponentFixture<DivisasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
