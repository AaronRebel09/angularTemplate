import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'Home',
      icon: 'home',
      link: './first-page',
      index: 0
    },
    {
      label: 'Work',
      icon: 'work',
      link: './second-page',
      index: 1
    },
    {
      label: 'Blog',
      icon: 'people',
      link: './third-page',
      index: 2
    },
    {
      label: 'Contact',
      icon: 'contact_mail',
      link: './fourth-page',
      index: 3
    }
  ];
  constructor() {}

  }
