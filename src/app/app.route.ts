import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CasasComponent } from './casas/casas.component';
import { FormCasasComponent } from './form-casas/form-casas.component';


//Rutas de nuestra App
const appRoutes: Routes = [
    { path: '',            component: CasasComponent },    
    { path: 'casas',       component: CasasComponent },
    { path: 'form-casas',  component: FormCasasComponent }
    //{ path: '**',           component: Page404Component }
  ];

export const AppRouter = RouterModule.forRoot(appRoutes);