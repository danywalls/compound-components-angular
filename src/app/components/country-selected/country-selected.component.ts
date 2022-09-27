import { Component, Input, OnInit } from '@angular/core';
import {CountryComponent} from "../country/country.component";

@Component({
  selector: 'app-country-selected',
  templateUrl: './country-selected.component.html'
})
export class CountrySelectedComponent {

  constructor(public  country: CountryComponent) {

  }

}
