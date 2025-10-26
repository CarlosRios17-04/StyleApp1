import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMujerComponent } from './pagina-mujer.component';

describe('PaginaMujerComponent', () => {
  let component: PaginaMujerComponent;
  let fixture: ComponentFixture<PaginaMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMujerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
