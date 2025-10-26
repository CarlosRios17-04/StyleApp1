import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeporteHombreComponent } from './deporte-hombre.component';

describe('DeporteHombreComponent', () => {
  let component: DeporteHombreComponent;
  let fixture: ComponentFixture<DeporteHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeporteHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeporteHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
