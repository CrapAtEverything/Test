import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

/*
* For api calls, once you've imported your HTTPClientModule into your
* app-component.module, you will need to import this class from it for 
* each file you want to use it on.
*/

@Component({
  selector: 'app-wrestler-get',
  templateUrl: './wrestler-get.component.html',
  styleUrls: ['./wrestler-get.component.css']
})
export class WrestlerGetComponent implements OnInit {

  //Two variables I've created both are private so can only be accessed by this class.
  private server:string = 'http://localhost:8000/api/';
  private wrestlerId:number = 1;

  wrestler:any = {
    name: 'Hoe',
    image: 'http://unsplash.it/401'
  }

  constructor(private http: HttpClient) { } 
  
  /*
  * In the constructor you're creating a variable called 'http'
  * and typecasting it to the HTTPClient class you imported above.
  * this will allow you to use HTTPClient methods and properties in this class.
  */

  ngOnInit() {
    /*
    * You're calling your http variable (which is a new instance of HTTPClient).
    * Inside the HTTPClient is a "get" method, which you have entered your endpoint in as a string.
    * This HTTP request is a GET so it's looking for a way to return a response.
    * To accomodate that you're adding a "subscribe" method 
    * (subscribe is linked to the Observable<any> datatype)
    * Subscribe has a couple parameters, we're only accessing the first one which is returned data
    * this is a callback function. You've stored all the returned data to variable "res"
    * and within the callback you've simply set variable "wrestler" to the response of the GET.
    */
    this.http.get('http://localhost:8000/api/wrestler/1').subscribe(res => {
      this.wrestler = res;
    });
  }

}
