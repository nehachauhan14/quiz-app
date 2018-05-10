import { Component, OnInit , Input } from '@angular/core';
import { MatDialog , MatDialogRef } from '@angular/material';
import {AddNewTeamDialogComponent} from '../add-new-team-dialog/add-new-team-dialog.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
debugger;
  participent =  [{
    id : 1 ,
    name : 'Astha'
  }, {
    id: 2 ,
    name : 'Akshita'
  }, {
    id: 3 ,
    name: 'Ashish'
  }];

  name: string ;

  teamList = [{
  id: 1,
  name: 'Team 1',
  member: ['Neha' , 'Surya']
  }, {
  id: 2,
  name: 'Team 2',
  member: ['Sonali' , 'Bhavna']
  }, {
    id: 3,
    name: 'Team 3',
    member: ['Lagnesh', 'Vishal']
  }];

  dialogRef: MatDialogRef<AddNewTeamDialogComponent>;

  teamPopUp() {
    this.dialogRef = this.dialog.open(AddNewTeamDialogComponent, {
        width: '500px',
        data : this.participent,
        hasBackdrop: false
    });

    this.dialogRef.afterClosed().subscribe(results => {
      console.log('Dialog Closed!');
    });
  }

  ngOnInit() {
  }

}
