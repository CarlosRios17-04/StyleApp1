import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiesta-hombre',
  templateUrl: './fiesta-hombre.component.html',
  styleUrls: ['./fiesta-hombre.component.scss']
})
export class FiestaHombreComponent {

    constructor(private router: Router){}
  
    ngOnInit():void{}

    navigateToPaginaHombre(){
    this.router.navigate(['/pagina-hombre'])
  }

}
