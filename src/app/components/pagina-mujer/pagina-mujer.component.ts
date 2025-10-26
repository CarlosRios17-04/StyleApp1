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

  selectCategory(category: string) {
    this.selectedCategory = category;
    console.log(`Categoría seleccionada: ${category}`);
  }

  uploadPhoto() {
    console.log('Abriendo selector de archivos...');
    // Lógica para subir foto
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Foto seleccionada:', file.name);
        alert(`Foto "${file.name}" seleccionada correctamente`);
      }
    };
    input.click();
  }

  navigateToCuerpo(){
    this.router.navigate(['cuerpo-mujer'])
  }
}