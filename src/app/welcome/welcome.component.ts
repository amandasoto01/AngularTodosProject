import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {AppComponent } from  '../app.component';

//@ComponentScan(value="com.in28minutes.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//public class SpringBootWebApplication implements SomeInterface{}
export class WelcomeComponent implements OnInit {
  
  message : string  = 'Some Welcome Message'
  name = ''

  //public springBootFirstWebApplication(){}
  
  //ActivatedRoute to get the parameter pass in the url
  constructor(private route:ActivatedRoute) { }

  //void init(){}
  ngOnInit(): void {
    console.log(this.message);
    //params is a Map. name is the Key.
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params['name']);
  }

}
