import { Component, OnInit } from '@angular/core';
import {CountryComponent} from "../country/country.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent  {

  constructor(public country: CountryComponent) {

  }



}
