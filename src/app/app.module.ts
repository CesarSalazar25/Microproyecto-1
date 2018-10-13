import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { APP_ROUTING } from './app.routes';

//Ngx-Bootstrap:
import { PopoverModule } from 'ngx-bootstrap/popover';

//componentes
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalleComponent,
    TarjetaComponent,
  ],
  imports: [
    BrowserModule,
    PopoverModule.forRoot(),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
