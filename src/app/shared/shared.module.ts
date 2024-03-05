import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DirectivesModule } from "../commons/directives/directives.module";
import { PipesModule } from "../commons/pipes/pipes.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    PipesModule,
    DatePipe,
  ],
  exports: [
    DirectivesModule,
    PipesModule,
    DatePipe,
  ]
})
export class SharedModule { }
