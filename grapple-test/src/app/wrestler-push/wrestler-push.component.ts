import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wrestler-push',
  templateUrl: './wrestler-push.component.html',
  styleUrls: ['./wrestler-push.component.css']
})
export class WrestlerPushComponent implements OnInit {

  constructor(
	// private http: HttpClient
  ) { }

  ngOnInit() {
  }

  //This is a function you made. TS doesn't require "function"
  postData(name, image) {
  	alert(name);
  	console.log(image);
  }


  /*
  * I made a post method which works fine. If you want to create your own
  * then when you're done push it to the git repo and I'll show you the results
  */

  /* 
  *	postData(name:string, image:string) {
  *		const payload:object = {
  *			name: name,
  *			image: image
  *		}
  *		
  *		this.http.post('http://localhost:8000/api/add/wrestler', payload).toPromise();
  *	}
  *
  */
}
