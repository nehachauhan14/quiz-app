import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { FormArray } from '@angular/forms/src/model';


@Component({
  selector: 'app-add-new-round-dialog',
  templateUrl: './add-new-round-dialog.component.html',
  styleUrls: ['./add-new-round-dialog.component.scss']
})
export class AddNewRoundDialogComponent implements OnInit {

  roundForm: FormGroup;
  constructor(private _fB: FormBuilder ,
    private _dialogRef: MatDialogRef<AddNewRoundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any  ) { }

    categoryForRound: Array<any> = [];
    newCategory: any = {};
    categoryFinal: Array<any> = [];
  categoryList = [{
    _id: 1 ,
    name: 'Angular'
  }, {
    _id: 2 ,
    name: 'Logo'
  }, {
    _id: 3 ,
    name: 'Vocab'
  }];

  pushCategory() {
    this.newCategory = this.roundForm.controls.categoryFinal.value[0].category ;
    console.log(this.newCategory);
    // Control.push(this.initCategory());
    }


  ngOnInit() {
    this.roundForm = this._fB.group({
      roundName : ['' , [Validators.required]],
      categoryFinal : this._fB.array([
        this.initCategory()
      ])
    });

  }
  initCategory() {
    return this._fB.group({
      category: ['', Validators.required],
      numberOfQuestion : [5, [Validators.required]],
      point: [ 5, [Validators.required,
                Validators.max(15)]],
      });
  }

  submit(roundForm) {
    console.log(roundForm);
  }


  getAddresses(roundForm) {
    return roundForm.get('categoryFinal').controls;
  }

  removeAddress(i: number) {
    const control = <FormArray>this.roundForm.controls['categoryFinal'];
    control.removeAt(i);
  }
  addCategory() {
    const control = <FormArray>this.roundForm.controls['categoryFinal'] ;
    control.push(this.initCategory());
  }
}
