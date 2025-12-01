import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaMujerComponent } from './fiesta-mujer.component';

describe('FiestaMujerComponent', () => {
  let component: FiestaMujerComponent;
  let fixture: ComponentFixture<FiestaMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiestaMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiestaMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
