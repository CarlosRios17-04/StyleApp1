import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casual-hombre',
  templateUrl: './casual-hombre.component.html',
  styleUrls: ['./casual-hombre.component.scss']
})
export class CasualHombreComponent {
  constructor(private router: Router){}

  navigateToPaginaHombre(){
    this.router.navigate(['/pagina-hombre'])
  }


}
