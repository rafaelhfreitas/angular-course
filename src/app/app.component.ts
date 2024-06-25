import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CourseCardComponent]
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2000,0,1);
  title = COURSES[0].description;

  performPrefetch: boolean = false;
  display: boolean = false;
  
  
  onCardClicked() {
    console.log('App component - click event bubbled...');
  }
  
  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled...', course);

  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }


  onPrefetch() {
    this.performPrefetch = true;
  }

  onDisplay(){
    this.display = true;
  }


    

}
