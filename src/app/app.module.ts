import { AuthorsService } from './authors.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc.component';
import { AuthorsComponent } from './authors/authors.component';
import { ThirdComponent } from './third/third.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TrackByComponent } from './track-by/track-by.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { NgxCaptchaModule } from 'ngx-captcha';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    AuthorsComponent,
    ThirdComponent,
    FavouriteComponent,
    ContactFormComponent,
    TrackByComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    RegistrationFormComponent,
    NestedFormComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule
    // NgbModule.forRoot()
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
