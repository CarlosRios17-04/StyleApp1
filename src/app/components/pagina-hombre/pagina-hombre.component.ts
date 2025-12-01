import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-hombre',
  templateUrl: './pagina-hombre.component.html',
  styleUrls: ['./pagina-hombre.component.scss']
})
export class PaginaHombreComponent {

  constructor(private router: Router){}

  ngOnInit():void{}

  navigateToFiestaHombre(){
    this.router.navigate(['fiesta-hombre'])
  }

  navigateToCasualHombre(){
    this.router.navigate(['casual-hombre'])
  }

   navigateToTrabajoHombre(){
    this.router.navigate(['trabajo-hombre'])
  }

   navigateToDeporteHombre(){
    this.router.navigate(['deporte-hombre'])
  }

   navigateToGeneros(){
    this.router.navigate(['/generos'])
  }
}
