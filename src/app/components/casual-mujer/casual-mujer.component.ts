import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casual-mujer',
  templateUrl: './casual-mujer.component.html',
  styleUrls: ['./casual-mujer.component.scss']
})
export class CasualMujerComponent {

constructor(private router: Router){}

 navigateToPaginaMujer(){
    this.router.navigate(['/pagina-mujer'])
  }


}
