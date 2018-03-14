import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CasaDetalleComponent } from './casas/casa-detalle/casa-detalle.component';
import { CasasComponent } from './casas/casas.component';


@NgModule({
  declarations: [
    AppComponent,
    CasaDetalleComponent,
    CasasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
