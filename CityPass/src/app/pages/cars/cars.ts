import { Component, computed, inject } from '@angular/core';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { Parking } from '../../parking';

@Component({
  selector: 'app-cars',
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars {
  private parkingService = inject(Parking);

  positions = computed(() => {
    return this.parkingService.tickets().map(ticket => {
      const coords = ticket.location.split(',');
      return {
        car: ticket.plateNo,
        location: {
          lat: Number(coords[0]),
          lng: Number(coords[1])
        }
      }
    })
  })
  options: google.maps.MapOptions = {
    center: { lat: 37.98, lng: 23.72 },
    zoom: 9,
  };
}
