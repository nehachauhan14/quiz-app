import { Component, Input, OnInit } from '@angular/core';
import { AddNewTeamDialogComponent } from '../add-new-team-dialog/add-new-team-dialog.component';
import { HttpWrapperService } from '../services/http-wrapper.service';
import { NgStyle } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import {Http, RequestOptions, Headers} from '@angular/http';
import { AddNewCategoryDialogComponent } from '../add-new-category-dialog/add-new-category-dialog.component';
import {AppSettings} from '../models/appSettings';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss']
})

export class CategorySelectComponent implements OnInit {
  Category: {};
  categorylist: any;
  dialogRef: MatDialogRef<AddNewCategoryDialogComponent>;
  settings = new AppSettings();
  adminUrl = this.settings.base + 'quizapp/api/category';
  @Input() showMePartially: boolean;
  dialogConfig = new MatDialogConfig();

  constructor(private _dialog: MatDialog,
    private _http?: HttpWrapperService) {
      this._http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
      console.log(response);
      this.categorylist = response;
    });
  }
  childStatusChange(edited: boolean) {
    if (edited) {
      this._http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
      console.log(response);
      this.categorylist = response;
    });
  }
}

addNewCategory(id?): void {


  if (id) {
    this.getCategoryById(id).subscribe(response => {
      this.Category = response;
      this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
        width : '500px' ,
        hasBackdrop : false,
        data : this.Category
      });
      this.dialogRef.afterClosed().subscribe( data => {
        console.log('Edit Dialog closed');
        this._http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
        console.log(response);
        this.categorylist = response;
      });
    });
    });
  } else {
    this.dialogRef = this._dialog.open(AddNewCategoryDialogComponent, {
      width : '500px' ,
      hasBackdrop : false,
      data : ''
    });
    this.dialogRef.afterClosed().subscribe( data => {
      console.log('Add Dialog closed');
      this._http.get('http://vishalranjan.in:1830/quizapp/api/category').subscribe(response => {
      console.log(response);
      this.categorylist = response;
    });
  });
  }

}


bgChange() {
  const color = [ 'linear-gradient(120deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
  'linear-gradient(120deg, #E6FF89 0%, #D2FF28 51%, #DEFF62 75%)',
  'linear-gradient(120deg, #FC8F68 0%, #FB6F3D 51%, #A0330C 75%)',
  'linear-gradient(120deg, #9900FF 0%, #9933FF 51%, #9966FF 75%)',
  'linear-gradient(120deg, #FF9900 0%, #FFCC00 51%, #FFFF00 75%)',
  'linear-gradient(120deg, #FF0000 0%, #FF3300 51%, #FF6600 75%)',
  'linear-gradient(120deg, #44001D 0%, #4A001F 51%, #A0330C 75%)',
  'linear-gradient(120deg, #8A3269 0%, #944476 51%, #9F5784 75%)',
  'linear-gradient(120deg, #2F4B26 0%, #415B39 51%, #546B4D 75%)'];
  const rand = color[Math.floor(Math.random() * color.length)];
  let randBackground;
  randBackground = { 'background': rand };
  return randBackground;
}

getCategoryById(id: string): Observable<Response> {
  return this._http.get('http://vishalranjan.in:1830/quizapp/api/category/' + id );
}

ngOnInit() {
}

}
