import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './day.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [DayComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports:[DayComponent]
})
export class DayModule { }
