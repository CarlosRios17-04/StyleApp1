import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualMujerComponent } from './casual-mujer.component';

describe('CasualMujerComponent', () => {
  let component: CasualMujerComponent;
  let fixture: ComponentFixture<CasualMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
