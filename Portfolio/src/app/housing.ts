import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './tutorial/tuthousinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) throw new Error('Failed to fetch');
      return await response.json(); // <-- This returns the location object directly
    } catch (error) {
      console.error(`Error fetching location ${id}:`, error);
      return undefined;
    }
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    // tslint:disable-next-line
    console.log(firstName, lastName, email);
  }
}
