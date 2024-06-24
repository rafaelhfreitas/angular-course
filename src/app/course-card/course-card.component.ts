import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
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
  cardIndex: number;


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();  

  constructor(){
  }


  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

   
  
  onCourseViewed() {
    console.log('card componenent - button clicked ...');
    this.courseEmitter.emit(this.course);
  }


  cardClasses(){
    if (this.course.category == 'BEGINNER') {
      return 'beginner'
    }
  }


  cardStyles(){
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'}
  }
  


}
