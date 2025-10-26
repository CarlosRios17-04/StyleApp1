import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualHombreComponent } from './casual-hombre.component';

describe('CasualHombreComponent', () => {
  let component: CasualHombreComponent;
  let fixture: ComponentFixture<CasualHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasualHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
