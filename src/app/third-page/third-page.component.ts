import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  email = new FormControl();
  constructor() { }

  ngOnInit() {
  }
  onEmailChange() {
    console.log(this.email.value);
  }
  onClickSendEmail(event: Event) {
    console.log('enviando email ...', event);
  }

}
