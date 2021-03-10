import { Component } from '@angular/core';

@Component({
  selector: 'track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent  {
courses;

  loadCourse() {
    this.courses = [
      {id :1 , name: 'course1'},
      {id :2 , name: 'course2'},
      {id :3 , name: 'course3'},
    ];
  }
  trackCourses(index, course) {
    return course ? course.id: undefined
  }

}
