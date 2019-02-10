import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wrestler-get',
  templateUrl: './wrestler-get.component.html',
  styleUrls: ['./wrestler-get.component.css']
})
export class WrestlerGetComponent implements OnInit {

  wrestler:any = {
    name: 'Hoe',
    image: 'http://unsplash.it/401'
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8000/api/wrestler/1').subscribe(res => {
      this.wrestler = res;
    });
  }

}
