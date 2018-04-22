import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRoundDialogComponent } from './add-new-round-dialog.component';

describe('AddNewRoundDialogComponent', () => {
  let component: AddNewRoundDialogComponent;
  let fixture: ComponentFixture<AddNewRoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
