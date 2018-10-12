import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';

//routing
import { APP_ROUTING } from './app.routes';

//componentes
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    TarjetaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
