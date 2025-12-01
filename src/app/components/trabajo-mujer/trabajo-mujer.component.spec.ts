import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoMujerComponent } from './trabajo-mujer.component';

describe('TrabajoMujerComponent', () => {
  let component: TrabajoMujerComponent;
  let fixture: ComponentFixture<TrabajoMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajoMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajoMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
