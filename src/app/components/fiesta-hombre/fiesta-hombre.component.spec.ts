import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaHombreComponent } from './fiesta-hombre.component';

describe('FiestaHombreComponent', () => {
  let component: FiestaHombreComponent;
  let fixture: ComponentFixture<FiestaHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestaHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiestaHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
