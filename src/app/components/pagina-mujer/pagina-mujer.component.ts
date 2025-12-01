import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-mujer',
  templateUrl: './pagina-mujer.component.html',
  styleUrls: ['./pagina-mujer.component.scss']
})
export class PaginaMujerComponent {
  selectedCategory: string = '';
constructor(private router: Router){}

ngOnInit():void{}


  navigateToCuerpo(){
    this.router.navigate(['generos'])
  }

  navigateToGeneros(){
    this.router.navigate(['/generos'])
  }
  
  navigateToCasualMujer(){
    this.router.navigate(['/casual-mujer'])
  }

  navigateToDeporteMujer(){
    this.router.navigate(['/deporte-mujer'])
  }

  
  navigateToFiestaMujer(){
    this.router.navigate(['/fiesta-mujer'])
  }

    
  navigateToTrabajoMujer(){
    this.router.navigate(['/trabajo-mujer'])
  }
}