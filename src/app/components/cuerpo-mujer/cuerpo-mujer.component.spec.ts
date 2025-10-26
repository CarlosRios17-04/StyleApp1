import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoMujerComponent } from './cuerpo-mujer.component';

describe('CuerpoMujerComponent', () => {
  let component: CuerpoMujerComponent;
  let fixture: ComponentFixture<CuerpoMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuerpoMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
