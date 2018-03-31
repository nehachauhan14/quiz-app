import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { AppSettings } from '../models/appSettings';

@Component({
  selector: 'app-add-new-category-dialog',
  templateUrl: './add-new-category-dialog.component.html',
  styleUrls: ['./add-new-category-dialog.component.scss']
})
export class AddNewCategoryDialogComponent implements OnInit {

  settings = new AppSettings();
  adminUrl = this.settings.base + 'quizapp/api/category';

  categoryFormGroup: FormGroup;
  isChecked = false;

  constructor(private _fb: FormBuilder,
              private _http: HttpWrapperService) { }


  ngOnInit() {
    this.categoryFormGroup = this._fb.group({
      categoryName: ['', [Validators.required]],
      isTechnology: ['', []],
      // technologyName : ['', [Validators.required]]
    });
  }

  public get categoryName(): string {
    return this.categoryFormGroup.get('categoryName').value;
  }

  public get isTechnology(): string {
    return this.categoryFormGroup.get('isTechnology').value;
  }

  onChange($event) {
    this.isChecked = !this.isChecked;
  }

  submit() {
    let header = new Headers();
    //    header.append('x-auth', localStorage.getItem('tokenfordetails'));
    header.append('Content-Type': 'application/json; charset=utf-8');
    const options = new RequestOptions({ headers: header });
    let data = {
      'categoryName': this.categoryName,
      'isTechnology': this.isTechnology
    };

    this._http.post(this.adminUrl, data, options).subscribe((response) =>
      console.log(response));    
    
  }
}
