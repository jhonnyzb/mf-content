
import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmbedMainComponent } from "./embed-main/embed-main.component";

@NgModule({
  declarations: [
    EmbedMainComponent
  ],
  exports: [
    EmbedMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    DatePipe
  ]
})
export class SharedModule { }
