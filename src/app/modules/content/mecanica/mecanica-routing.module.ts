import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MecanicaComponent } from './mecanica.component';

const routes: Routes =[
  {
    path:'',
    children:[
       {
        path:'**',
        component:MecanicaComponent,
        data: { title: '¿Cómo gano?'}
       }
     ]
   }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MecanicaRoutingModule { }
