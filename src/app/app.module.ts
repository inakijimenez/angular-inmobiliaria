import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//services
import { CasasService } from './providers/casas.service';

//pipes
import { CasasPipe } from './pipes/casas.pipe';

//components
import { AppComponent } from './app.component';
import { CasaDetalleComponent } from './casas/casa-detalle/casa-detalle.component';
import { CasasComponent } from './casas/casas.component';
import { FormCasasComponent } from './form-casas/form-casas.component';




@NgModule({
  declarations: [
    AppComponent,
    CasaDetalleComponent,
    CasasComponent,
    CasasPipe,
    FormCasasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouter
  ],
  providers: [CasasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
