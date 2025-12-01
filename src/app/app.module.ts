import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // ← AGREGADO

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FiestaMujerComponent } from './components/fiesta-mujer/fiesta-mujer.component';
import { CasualMujerComponent } from './components/casual-mujer/casual-mujer.component';
import { TrabajoMujerComponent } from './components/trabajo-mujer/trabajo-mujer.component';
import { DeporteMujerComponent } from './components/deporte-mujer/deporte-mujer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PaginaPrincipalComponent,
    GenerosComponent,
    PaginaMujerComponent,
    CuerpoMujerComponent,
    PaginaHombreComponent,
    FiestaHombreComponent,
    CasualHombreComponent,
    TrabajoHombreComponent,
    DeporteHombreComponent,
    FiestaMujerComponent,
    CasualMujerComponent,
    TrabajoMujerComponent,
    DeporteMujerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  // ← AGREGADO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }