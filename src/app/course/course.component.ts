import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // This is comment
  title = "List of Courses";
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  courses=[];
  constructor(courseService:CoursesService) { 
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
