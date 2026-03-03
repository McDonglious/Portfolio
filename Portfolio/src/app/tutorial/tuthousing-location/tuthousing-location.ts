import { Component, input } from '@angular/core';
import {HousingLocationInfo} from '../tuthousinglocation';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './tuthousing-location.html',
  styleUrl: './tuthousing-location.scss',
})
export class TuthousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
