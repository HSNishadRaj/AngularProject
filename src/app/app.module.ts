import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperSectionComponent } from './upper-section/upper-section.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperSectionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
