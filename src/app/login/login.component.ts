
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  msg:string=""

 

   ngOnInit() {
    
  }

  
  myFunction()
  {
    alert("oyeeeeeee!!!!!!!!!!!!!")
  }


    
    
}