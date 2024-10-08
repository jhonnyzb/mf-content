import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { MecanicaModule } from './mecanica/mecanica.module';
import { NewsListModule } from './news-list/news-list.module';
import { WidgetsModule } from './widgets/widgets.module';
import { FaqModule } from './faq/faq.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MecanicaModule,
    NewsListModule,
    WidgetsModule,
    FaqModule
  ]
})
export class ContentModule { }
