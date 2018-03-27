import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-category-dialog',
  templateUrl: './add-new-category-dialog.component.html',
  styleUrls: ['./add-new-category-dialog.component.scss']
})
export class AddNewCategoryDialogComponent implements OnInit {

  categoryFormGroup: FormGroup ;
  isChecked =  false ;

  constructor(private _fb: FormBuilder) { }


  ngOnInit() {
      this.categoryFormGroup = this._fb.group({
      categoryName : ['' , [Validators.required]],
      isTechnology: ['', []],
      technologyName : ['', [Validators.required]]
    });
  }

  onChange($event) {
    this.isChecked = !this.isChecked ;
  }

  submit() {
    console.log('form Submitted');
  }
}
