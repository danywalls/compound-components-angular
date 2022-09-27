import {Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent  {
  countries$ = this.countryService.getCountries();
  selected$: Subject<string> = new Subject<string>();
  constructor(private countryService: CountryService) { }

  changed(value: any) {
    this.selected$.next(value);
  }
}
