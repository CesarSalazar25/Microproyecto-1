import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';

//Componentes:
const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'detalle/:id', component: DetalleComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'},

];

export const APP_ROUTING= RouterModule.forRoot(ROUTES);