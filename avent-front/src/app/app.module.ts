import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DailyLinkListComponent } from './daily-link-list/daily-link-list.component';
import { NewLinkComponent } from './new-link/new-link.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyLinkListComponent,
    NewLinkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
