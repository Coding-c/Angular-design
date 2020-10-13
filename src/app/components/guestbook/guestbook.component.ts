import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../models/guest';
@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {
  name: string;
  subject: string;
  message: string;
  guests: Guest[];

  constructor(public guestService: GuestService) { }

  ngOnInit(): void {
    this.guests = this.guestService.getGuests();
  }

  addGuests(name: HTMLInputElement, subject: HTMLInputElement, message: HTMLInputElement) {
    this.guestService.addGuests({
      name: name.value,
      subject: subject.value,
      message: message.value,
      hide: true
    });
    name.value = '';
    subject.value = '';
    message.value = '';
    return false;
  }

}
