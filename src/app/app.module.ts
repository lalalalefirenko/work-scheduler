import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayModule } from './day/day.module';
import { MatGridListModule } from '@angular/material';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DayModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
