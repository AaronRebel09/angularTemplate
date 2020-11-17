import { Component, OnInit } from '@angular/core';
import {NULL_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  alternate = true;
  // tslint:disable-next-line:member-ordering
  toggle = true;
  // tslint:disable-next-line:member-ordering
  color = false;
  // tslint:disable-next-line:member-ordering
  size = 40;
  // tslint:disable-next-line:member-ordering
  expandEnabled = true;
  // tslint:disable-next-line:member-ordering
  contentAnimation = true;
  // tslint:disable-next-line:member-ordering
  dotAnimation = true;
  // tslint:disable-next-line:member-ordering
  side = 'left';

  // tslint:disable-next-line:member-ordering
  entries = [
    {
      header: 'UNAM',
      content: 'blog, stack: polymer javascript',
      side: '2017',
      index: 0
    },
    {
      header: 'Capgemini',
      content: 'BBVA Cliente Sistema de Tasas para depositos Internos, stack: java8 angular oracle spring aop mvc gitlab',
      side: '2018',
      index: 1
    },
    {
      header: 'BBVA',
      content: 'Contabilidad en medios electrónicos, stack: java8 APX mongo spring batch jenkins sonar bitbucket jira ninja',
      side: '2019',
      index: 2
    },
    {
      header: 'CITI',
      content: 'Automatización de Procesos Internos, stack: java14 rest soap oracle mongo spring springboot microservices',
      side: '2020',
      index: 3
    }
  ];

  addEntry() {
    this.entries.push({
      header: 'header',
      content: 'content',
      side: 'side',
      index: 0
    });
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

}
