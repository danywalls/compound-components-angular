import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';
import { CountrySelectedComponent } from './components/country-selected/country-selected.component';
import { CountryComponent } from './components/country/country.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountrySelectedComponent,
    CountryFlagComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
