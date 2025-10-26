import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHombreComponent } from './pagina-hombre.component';

describe('PaginaHombreComponent', () => {
  let component: PaginaHombreComponent;
  let fixture: ComponentFixture<PaginaHombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaHombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
