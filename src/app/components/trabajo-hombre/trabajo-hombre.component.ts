import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajo-hombre',
  templateUrl: './trabajo-hombre.component.html',
  styleUrls: ['./trabajo-hombre.component.scss']
})
export class TrabajoHombreComponent {
  constructor(private router: Router){}

  navigateToPaginaHombre(){
    this.router.navigate(['/pagina-hombre'])
  }

}
