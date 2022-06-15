import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroFormComponent } from './libro-form.component';

describe('LibroFormComponent', () => {
  let component: LibroFormComponent;
  let fixture: ComponentFixture<LibroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
