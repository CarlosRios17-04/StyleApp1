import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { GenerosComponent } from './components/generos/generos.component';
import { PaginaMujerComponent } from './components/pagina-mujer/pagina-mujer.component';
import { CuerpoMujerComponent } from './components/cuerpo-mujer/cuerpo-mujer.component';
import { PaginaHombreComponent } from './components/pagina-hombre/pagina-hombre.component';
import { FiestaHombreComponent } from './components/fiesta-hombre/fiesta-hombre.component';
import { CasualHombreComponent } from './components/casual-hombre/casual-hombre.component';
import { TrabajoHombreComponent } from './components/trabajo-hombre/trabajo-hombre.component';
import { DeporteHombreComponent } from './components/deporte-hombre/deporte-hombre.component';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'pagina-principal', component: PaginaPrincipalComponent},
  {path: 'generos', component: GenerosComponent},
  {path: 'pagina-mujer', component: PaginaMujerComponent},
  {path: 'cuerpo-mujer', component: CuerpoMujerComponent},
  {path: 'pagina-hombre', component: PaginaHombreComponent},
  {path: 'fiesta-hombre', component: FiestaHombreComponent},
  {path: 'casual-hombre', component: CasualHombreComponent},
  {path: 'trabajo-hombre', component: TrabajoHombreComponent},
  {path: 'deporte-hombre', component: DeporteHombreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
