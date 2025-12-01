import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajo-mujer',
  templateUrl: './trabajo-mujer.component.html',
  styleUrls: ['./trabajo-mujer.component.scss']
})
export class TrabajoMujerComponent {
  constructor(private router:Router){}

   navigateToPaginaMujer(){
    this.router.navigate(['/pagina-mujer'])
  }

}
