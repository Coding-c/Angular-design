import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  scrollToElement(selector) {
    const element = document.querySelector(selector)
    element ? element.scrollIntoView({behavior: "smooth"}): null;
  }

}
