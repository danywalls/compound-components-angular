import { Component, Input } from '@angular/core';
import {CountryComponent} from "../country/country.component";

@Component({
  selector: 'app-country-flag',
  templateUrl: './country-flag.component.html',
  styleUrls: ['./country-flag.component.css']
})
export class CountryFlagComponent  {

  constructor(public country: CountryComponent) {

  }

}
