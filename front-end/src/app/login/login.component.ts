import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CygrpEmailValidator} from '../customvalidators/cygrpemail.validators';
import {Http} from '@angular/http';
import {AuthService} from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   constructor(private auth: AuthService) {

  }
 loginform = new FormGroup({
  email: new FormControl('',
    [
    Validators.required,
    CygrpEmailValidator.onlycygrpallowed
       ]),

  password: new FormControl('',
  [
  Validators.required,
  // Validators.minLength(7),
  // Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$?!_])[a-zA-Z0-9#@$?!_]+$/)

  ]),
});

get password() {
  return this.loginform.get('password');
}


get email() {
  return this.loginform.get('email');
}

ngOnInit() {
  }

loginmethod(logincredentials) {
          this.auth.login(logincredentials);
        }


logoutmethod() {
    this.auth.logout();
  }

   submit(loginform) {
    const loginData = {
      email : this.email.value as string ,
      password : this.password.value as string ,
    };
    console.log(
                '   email: ' + loginData.email +
                '   password :' + loginData.password
   );
    if (!this.loginform.invalid) {
      this.loginmethod(loginData);
    } else {
    console.log('enter details properly');
    }
     }

}





















