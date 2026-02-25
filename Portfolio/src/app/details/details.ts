import {ChangeDetectorRef,Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing';
import {HousingLocationInfo} from '../housinglocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocationInfo | undefined;
  applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      console.log('Fetched location:', housingLocation);
      this.housingLocation = housingLocation;
      this.changeDetectorRef.markForCheck();
    });
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
