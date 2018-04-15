import { Component, OnInit, EventEmitter, Inject, Optional , Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-new-category-dialog',
  templateUrl: './add-new-category-dialog.component.html',
  styleUrls: ['./add-new-category-dialog.component.scss']
})
export class AddNewCategoryDialogComponent implements OnInit {

  baseUrl = this._http.baseUrl + '/api/category';
  header: Headers = new Headers();
  categoryFormGroup: FormGroup;
  isChecked = false;
  id: string ;
  title: string ;

  constructor(private _fb: FormBuilder,
    private _http: HttpWrapperService,
    private _dialogRef: MatDialogRef<AddNewCategoryDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) private categoryToEdit: any) { }

    ngOnInit() {
      this.categoryFormGroup = this._fb.group({
        categoryName: [this.categoryToEdit[0] ? this.categoryToEdit[0].categoryName : '' , [Validators.required]],
        isTechnology: [this.categoryToEdit[0] ? this.categoryToEdit[0].isTechnology : '', []],
        // technologyName : ['', [Validators.required]]
      });
      this.id = this.categoryToEdit[0] ? this.categoryToEdit[0]._id : '' ;
      this.title = this.categoryToEdit[0] ? 'Edit Category' : 'Add New Category' ;
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
      this.id === '' ? this.addNew() : this.editCategory(this.id);
    }

    addNew() {
      // header.append('x-auth', localStorage.getItem('tokenfordetails'));
      this.header.append('Content-Type', 'application/json; charset=utf-8');
      const options = new RequestOptions({ headers: this.header });
      let data = {
        'categoryName': this.categoryName,
        'isTechnology': this.isTechnology
      };
      this._http.post(this.baseUrl, data, options).subscribe((response) => {
        this._dialogRef.close();
        console.log(response);
      });
    }

    editCategory(id) {
      // header.append('x-auth', localStorage.getItem('tokenfordetails'));
      this.header.append('Content-Type', 'application/json; charset=utf-8');
      const options = new RequestOptions({ headers: this.header });
      let data = {
        'categoryName': this.categoryName,
        'isTechnology': this.isTechnology
      };
      this._http.put(this.baseUrl + '/' + id , data , options)
      .subscribe(response => {
        this._dialogRef.close();
        console.log(response);
      });
    }

  }
