import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deporte-mujer',
  templateUrl: './deporte-mujer.component.html',
  styleUrls: ['./deporte-mujer.component.scss']
})
export class DeporteMujerComponent {
  constructor(private router: Router){}
  
  navigateToPaginaMujer(){
    this.router.navigate(['/pagina-mujer'])
  }



}
