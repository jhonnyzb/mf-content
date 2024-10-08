import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets.component';
import { WidgetsDetailComponent } from './widgets-detail/widgets-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    WidgetsComponent,
    WidgetsDetailComponent
  ],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    SharedModule
  ]
})
export class WidgetsModule { }
