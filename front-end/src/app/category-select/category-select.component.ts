import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddNewCategoryDialogComponent } from '../add-new-category-dialog/add-new-category-dialog.component';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})
export class CategorySelectComponent implements OnInit {
categorylist = [{
                id: 1 ,
                name: 'Algorithm'
              },  {
                id: 2,
                name: 'Data Structure'
              }, {
                id: 3,
                name: 'DBMS'
              }];

dialogRef: MatDialogRef<AddNewCategoryDialogComponent>;

@Input() showMePartially: boolean;
  constructor(private _dialog: MatDialog) {
  }

  addNewCategory(): void {
    this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
      width : '500px' ,
      hasBackdrop : false
    });
  }
  ngOnInit() {
  }

}
