import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CygrpEmailValidator} from '../customvalidators/cygrpemail.validators';
import {ConfirmPasswordValidators} from '../customvalidators/confirmpassword.validator';
import {SampleComponent} from '../sample/sample.component';
import {Http} from '@angular/http';
import {AuthService} from '../services/authservice.service';



@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private auth: AuthService) {

  }
  roles = [
  {
    id : 1 ,
    value : 'Presentor'},
    {
      id : 2 ,
      value : 'Participant'}];


    form = new FormGroup({
      email: new FormControl('',
        [
        Validators.required,
        CygrpEmailValidator.onlycygrpallowed
        ]),

      password: new FormControl('',
        [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$^?%!_])[a-zA-Z0-9#@^$?%!_]+$/)
        ]),

      name: new FormControl('',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z ]+$/)
        ]),

      cgiCode: new FormControl('',
        [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern(/^[0-9]+$/)
        ]),

      role : new FormControl('', Validators.required),

      confirmPassword: new FormControl('',
        [
        Validators.required,
        ConfirmPasswordValidators.shouldmatchwithpassword
        ])


    });

    get password() {
      return this.form.get('password');
    }

    get name() {
      return this.form.get('name');
    }

    get email() {
      return this.form.get('email');
    }

    get cgiCode() {
      return this.form.get('cgiCode');
    }

    get confirmPassword() {
      return this.form.get('confirmPassword');
    }
    ngOnInit() {
    }

  register(userData) {
          this.auth.registration(userData);
        }


  submit(form) {
    const userData = {
      name : this.name.value as string ,
      email : this.email.value as string ,
      cgiCode : this.cgiCode.value as string,
      role : this.form.controls.role.value as string,
      password : this.password.value as string
      // confirmPassword : this.form.controls.confirmPassword.value as string
    };
    if (this.form.invalid) {
      console.log('fill all details properly');
      alert('REGISTRATION UNSUCEESSFUL');
           } else {
        console.log('name :' + userData.name  +
      '   email ' + userData.email +
      '   cgiCode: '  + userData.cgiCode +
      '   role: ' + userData.role +
      '   password :' + userData.password
            );
      this.register(userData);

  }

}

}

