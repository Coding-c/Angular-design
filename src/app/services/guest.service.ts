import { Injectable } from '@angular/core';
import { Guest } from '../models/guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  guests: Guest[];

  constructor() {
    // this.guests = [
    //   {title: 'Create a Website', description: 'Create a wordpress website', hide: true},
    //   {title: 'write a document', description: 'Do other stuff', hide: true}
    // ];
  }

  getGuests() {
    if(localStorage.getItem('guests') === null) {
      this.guests = [];
    } else {
      this.guests = JSON.parse(localStorage.getItem('guests'));
    }
    return this.guests;
  }

  addGuests(guest: Guest) {
    this.guests.push(guest);
    let guests = [];
    if(localStorage.getItem('guests') === null) {
      guests = [];
      guests.push(guest);
      localStorage.setItem('guests', JSON.stringify(guests));
    } else {
      guests = JSON.parse(localStorage.getItem('guests'));
      guests.push(guest); 
      localStorage.setItem('guests', JSON.stringify(guests));
    }
  }

}
