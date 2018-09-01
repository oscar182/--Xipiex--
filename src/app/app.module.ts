import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Componentes
import { Navbar } from './elementos/navbar/navbar.component';
import { AppComponent } from './app.component';
import { Buscador } from './elementos/main/buscador.component';
import { ResulComponent }from './elementos/resul/resul.component';
import { perfilProfesional } from "./elementos/perfilProfesional/perfilProfesional.component";
//Rutas


const routes:Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'verPerfil', component: perfilProfesional },
  {path:'resul',component: ResulComponent},
  {path:'**', component: Buscador },
  
]

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    Buscador,
    ResulComponent,
    perfilProfesional

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
