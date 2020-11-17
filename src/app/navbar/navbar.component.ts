import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'comienza aqui',
      icon: 'home',
      link: './first-page',
      index: 0
    },
    {
      label: 'portafolio',
      icon: 'work',
      link: './second-page',
      index: 1
    },
    {
      label: 'noticias',
      icon: 'people',
      link: './third-page',
      index: 2
    },
    {
      label: 'acerca de Aaron',
      icon: 'contact_mail',
      link: './fourth-page',
      index: 3
    }
  ];
  constructor() {}

  }
