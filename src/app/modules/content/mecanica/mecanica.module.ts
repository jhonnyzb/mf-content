import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MecanicaRoutingModule } from './mecanica-routing.module';
import { MecanicaComponent } from './mecanica.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MecanicaComponent
  ],
  imports: [
    CommonModule,
    MecanicaRoutingModule,
    SharedModule
  ]
})
export class MecanicaModule { }
