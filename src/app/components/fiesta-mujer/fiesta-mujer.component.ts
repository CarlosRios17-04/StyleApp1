import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiesta-mujer',
  templateUrl: './fiesta-mujer.component.html',
  styleUrls: ['./fiesta-mujer.component.scss']
})
export class FiestaMujerComponent {
  constructor(private router: Router){}

   navigateToPaginaMujer(){
    this.router.navigate(['/pagina-mujer'])
  }

}
