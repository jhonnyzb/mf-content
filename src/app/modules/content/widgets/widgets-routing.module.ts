import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsDetailComponent } from './widgets-detail/widgets-detail.component';
import { WidgetsComponent } from './widgets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'detail/:id',
        component: WidgetsDetailComponent,
        data: {breadcrumb: {alias: 'widgetsdetail'}, title: 'Detalle widget'}
      },
      {
        path: '**',
        component: WidgetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
