import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsListRoutingModule } from './news-list-routing.module';
import { NewsListDetailComponent } from './news-list-detail/news-list-detail.component';
import { NewsListComponent } from './news-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    NewsListComponent,
    NewsListDetailComponent
  ],
  imports: [
    CommonModule,
    NewsListRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class NewsListModule { }
