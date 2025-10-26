import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoHombreComponent } from './trabajo-hombre.component';

describe('TrabajoHombreComponent', () => {
  let component: TrabajoHombreComponent;
  let fixture: ComponentFixture<TrabajoHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
