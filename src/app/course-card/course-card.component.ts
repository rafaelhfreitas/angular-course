import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {


  @Input({
    required: true
  })
  course: Course;

  @Input({
    required: true
  })
  index: number;


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();  

  constructor(){
  }
   
  
  onCourseViewed() {
    console.log('card componenent - button clicked ...');
    this.courseEmitter.emit(this.course);
  }

  


}
