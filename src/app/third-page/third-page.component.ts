import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  imagesLink = [
    {
      title:  'Apoyando al Real Madrid,CDMX.',
      link:   '../../assets/aron/realmadrid.jpg',
      index: 0
    },
    {
      title:  'Bellas Artes CDMX.',
      link:   '../../assets/aron/bellasartes.jpg',
      index: 1
    },
    {
      title:  'Campus Party Guadalajara,MX.',
      link:   '../../assets/aron/cpmx.jpg',
      index: 2
    },
    {
      title:  'Restaurante Guadalajara,MX.',
      link:   '../../assets/aron/jalisco.jpg',
      index: 3
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
