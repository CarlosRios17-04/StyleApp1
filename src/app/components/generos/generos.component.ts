import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.scss']
})
export class GenerosComponent implements OnInit {
  selectedGenero: string = '';

  selectGenero(genero: string) {
    this.selectedGenero = genero;
    console.log(`Género seleccionado: ${genero}`);
  }

  scanFace() {
    console.log('Iniciando escaneo de rostro...');
    // Aquí iría la lógica para activar la cámara y escanear el rostro
    // Por ejemplo, podrías integrar con una API de reconocimiento facial
    alert('Funcionalidad de escaneo de rostro activada');
  }

  constructor(private router: Router){}
  ngOnInit(): void {}
  
  navigateToPaginaMujer(){
    this.router.navigate(['/pagina-mujer']);
  }
navigateToPaginaHOmbre(){
this.router.navigate(['/pagina-hombre']);

}
}
