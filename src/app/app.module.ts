import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  //Register dependencies here
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
