import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../app/shared/password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{



  get userName(){
    return this.registrationForm.get('userName');
  }

  get eMail(){
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder) {}


  registrationForm = this.fb.group({
    userName: ['', [Validators.required,Validators.minLength(3)]],
    email: [''],
    password: [''],
    confirmPassword: ['']
  },{validator: PasswordValidator});





  onSubmit(){
    console.log(this.registrationForm.value);
    this.registrationForm.reset();
  }


}
