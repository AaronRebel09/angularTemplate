import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
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
