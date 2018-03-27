import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
import {HttpWrapperService} from './services/http-wrapper.service';
import {AuthService} from './services/authservice.service';

// Components
import {AppComponent} from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ManageQuizComponent} from './manage-quiz/manage-quiz.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { TeamListComponent } from './team-list/team-list.component';
import { PostComponent } from './post/post.component';
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
import { AddNewTeamDialogComponent} from './add-new-team-dialog/add-new-team-dialog.component';
import { AddNewCategoryDialogComponent } from './add-new-category-dialog/add-new-category-dialog.component';

// Material Imports
import {MatSelectModule , MatDialogModule, MatButtonModule, MatCheckboxModule, MatCardModule,
        MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
        MatNativeDateModule, MatChipsModule, MatDialog } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    NotFoundComponent,
    SampleComponent,
    QuizComponent,
    LoginComponent,
    CategorySelectComponent,
    TeamListComponent,
    AddNewTeamDialogComponent,
    PostComponent,
    AddNewCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: RegisterComponent
      },
    {
      path: 'managequiz',
      component : ManageQuizComponent
    },
    {
      path: 'home' ,
      component: RegisterComponent
    } ,
    {
      path: 'sample' ,
      component: SampleComponent
    } ,
    {
      path: 'quiz-select',
      component: QuizSelectComponent
    },
    {
      path: 'login' ,
      component: LoginComponent
    }, {
      path: 'category' ,
      component : CategorySelectComponent
    }, {
      path: 'team',
      component: TeamListComponent
    },
    {
      path: 'post',
      component: PostComponent
    },
      {
        path: '**',
        component: NotFoundComponent
    }
    ]),
    HttpModule
  ],
  providers: [
    HttpWrapperService,
    AuthService
  ],
  entryComponents: [AddNewTeamDialogComponent,
                    AddNewCategoryDialogComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
constructor() {
}
}
