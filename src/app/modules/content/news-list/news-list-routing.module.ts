import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListDetailComponent } from './news-list-detail/news-list-detail.component';
import { NewsListComponent } from './news-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'detail/:id',
        component: NewsListDetailComponent,
        data: {breadcrumb: {alias: 'newsdetail'}, title: 'Detalle noticias'},
      },
      {
        path: '**',
        component: NewsListComponent,
        data: { title: 'Noticias' }
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsListRoutingModule { }
