import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service copy';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  //instance of the Router - dependency  
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    public hardedCodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { } 
  //find the router and inject it in the particular component
  //pass a parameter to the constructor you can use it as a member variable

  ngOnInit(): void {
  }

  handleLogin(){
    //if(this.username === "in28minutes" && this.password === 'dummy'){
    if(this.hardedCodedAuthenticationService.authenticate(this.username,this.password)){ 
      //redirect to welcome page 
      this.router.navigate(['welcome', this.username])//array parameter of the page

      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }

    //console.log(this.username);
  }

  handleBasicAuthLogin(){
    //if(this.username === "in28minutes" && this.password === 'dummy'){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        //redirect to welcome page 
      this.router.navigate(['welcome', this.username])//array parameter of the page
      this.invalidLogin = false  
    },
      error => {
        console.log(error)
        this.invalidLogin = true
       
      }
    )
  }

  //executeJWTAuthenticationService


  handleJWTAuthLogin(){
    //if(this.username === "in28minutes" && this.password === 'dummy'){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        //redirect to welcome page 
      this.router.navigate(['welcome', this.username])//array parameter of the page
      this.invalidLogin = false  
    },
      error => {
        console.log(error)
        this.invalidLogin = true
       
      }
    )
  }
}
