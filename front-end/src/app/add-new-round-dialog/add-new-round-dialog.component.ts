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

    categoryForRound = [];
    newCategory: any = {};
    categoryFinal: FormArray;
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
      numberOfQuestion : [, [Validators.required]],
      point: [, [Validators.required,
                Validators.max(15)]],
      });
  }

  submit(roundForm) {
    console.log(roundForm.value);
  }


  getAddresses(roundForm) {
    return roundForm.get('categoryFinal').controls;
  }

  getCategory(roundForm) {
   const val = roundForm.get('categoryFinal').value;
    if (val[0].category === '' || val[0].numberOfQuestion == null || val[0].point == null ) {
      return;
    }
    return roundForm.get('categoryFinal').value;
  }

  removeAddress(i: number) {
    const control = <FormArray>this.roundForm.controls['categoryFinal'];
    control.removeAt(i);
  }
  addCategory(cat: any, number: any , pnt: any) {
    this.categoryFinal = <FormArray>this.roundForm.get('categoryFinal');
    this.newCategory = this._fB.group({
      category: this.roundForm.get('categoryFinal').value[0].category,
      numberOfQuestion: this.roundForm.get('categoryFinal').value[0].numberOfQuestion,
      point: this.roundForm.get('categoryFinal').value[0].point
    });
    this.categoryFinal.push(this.newCategory);
    cat.value = '';
    number.value = '';
    pnt.value = '';
  }


}
