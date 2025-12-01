import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deporte-hombre',
  templateUrl: './deporte-hombre.component.html',
  styleUrls: ['./deporte-hombre.component.scss']
})
export class DeporteHombreComponent {
  constructor(private router: Router){}

  navigateToPaginaHombre(){
    this.router.navigate(['/pagina-hombre'])
  }


}
