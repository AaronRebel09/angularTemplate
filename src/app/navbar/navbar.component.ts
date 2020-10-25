import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'Comienza Aqui',
      icon: 'home',
      link: './first-page',
      index: 0
    },
    {
      label: 'Portafolio',
      icon: 'work',
      link: './second-page',
      index: 1
    },
    {
      label: 'News',
      icon: 'people',
      link: './third-page',
      index: 2
    },
    {
      label: 'Sobre Aaron',
      icon: 'contact_mail',
      link: './fourth-page',
      index: 3
    }
  ];
  constructor() {}

  }
