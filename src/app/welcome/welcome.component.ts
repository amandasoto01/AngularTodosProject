import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
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
  welcomeMessageFromService: string
  errorMessageFromService: string

  //public springBootFirstWebApplication(){}
  
  //ActivatedRoute to get the parameter pass in the url
  constructor(
    private route:ActivatedRoute,
    private service: WelcomeDataService) { }

  //void init(){}
  ngOnInit(): void {
    //console.log(this.message);
    //params is a Map. name is the Key.
    this.name = this.route.snapshot.params['name'];
    //console.log(this.route.snapshot.params['name']);
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService().subscribe());
    this.service.executeHelloWorldBeanService().subscribe(
      //asynchronous call
      //what should we do when we get the response back
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    //console.log("last line of getWelcomeMessage");
    //console.log("get welcome message");
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error){
    //console.log(error)
    //console.log(error.error)
    //console.log(error.error.message)
    this.errorMessageFromService = error.error.message
  }
}
