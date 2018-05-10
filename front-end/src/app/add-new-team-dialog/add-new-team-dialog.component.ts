import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');

@Component({
  selector: 'app-add-new-team-dialog',
  templateUrl: './add-new-team-dialog.component.html',
  styleUrls: ['./add-new-team-dialog.component.scss']
})
export class AddNewTeamDialogComponent implements OnInit {

  firstFormGroup: FormGroup ;
  participent: any ;
  constructor(private _fb: FormBuilder ,
              public dialogRef: MatDialogRef<AddNewTeamDialogComponent>,
              @Inject(MAT_DIALOG_DATA) _participent: any) {
                this.participent = _participent;
              }

  ngOnInit() {
    this.firstFormGroup = this._fb.group({
      teamName : ['', [Validators.required]] ,
      member : [[] , [Validators.required] ]
  });
  }

submit() {
  let name = this.firstFormGroup.controls.teamName.value ;
  let teamMember = this.firstFormGroup.controls.member.value ;
  console.log(name + ' ' + teamMember );
  // Need to access service once created by node team
}

}
