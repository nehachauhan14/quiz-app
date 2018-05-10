import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpWrapperService} from '../services/http-wrapper.service';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  panelOpenState = false;
  sampleResponse: any;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor(private http?: HttpWrapperService) { }

  ngOnInit() {
  }

  sampleGet() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((request) => {
      console.log(request);
      this.sampleResponse = request;
    });
  }

  samplePost() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 2,
      id: 3,
      title: 'Custom Post',
      body: 'sample body content'
    }).subscribe((request) => {
      console.log(request);
      this.sampleResponse = request;
    });
  }
}
  




