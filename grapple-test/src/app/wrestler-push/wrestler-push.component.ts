import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrestler-push',
  templateUrl: './wrestler-push.component.html',
  styleUrls: ['./wrestler-push.component.css']
})
export class WrestlerPushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

postData(name, image) {
  alert(name);
}

}
