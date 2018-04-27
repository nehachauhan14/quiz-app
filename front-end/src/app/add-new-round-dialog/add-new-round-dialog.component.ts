import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material';
import { FormArray } from '@angular/forms/src/model';
import { CategorySelectComponent } from '../category-select/category-select.component';


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

    newCategory: any ;
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

    // this.roundForm.valid = (this.catrgoryFinal.lenght < 2) ? false 

    ngOnInit() {
      // debugger;
      this.roundForm = this._fB.group({
        roundName : [, [Validators.required]],
        roundType : [, [Validators.required]],
        categoryFinal : this._fB.array([
          this.initCategory()
        ])
      });
    }

    initCategory() {
      return this._fB.group({
        category: [, ] ,
        numberOfQuestion : [, ],
        point: [, [Validators.max(15)]],
        });
      }

      submit(roundForm) {
        console.log(roundForm.value);
      }

      isNotNull(a) {
        if (a.category !== '' && a.numberOfQuestion !== null && a.point !== null ) {
          return true ;
        } else {
          return false ;
        }
      }
      getCategory() {
        return this.roundForm.get('categoryFinal').value;
      }

      removeCategory(i: number) {
        const control = <FormArray>this.roundForm.controls['categoryFinal'];
        control.removeAt(i);
      }

      addCategory(cat: any, number: any , pnt: any) {
        if (cat.value === '' || number.value === '' || pnt.value === '') {
          return;
        }
        this.categoryFinal = <FormArray>this.roundForm.get('categoryFinal');
        this.newCategory = this._fB.group({
          category: cat.value,
          numberOfQuestion: number.value,
          point: pnt.value
        });
        this.categoryFinal.push(this.newCategory);
        cat.value = '';
        number.value = '';
        pnt.value = '';
        debugger;
      }
    }
