import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports:[NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit{


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


  @ContentChild(CourseImageComponent, {read: ElementRef})
  image: CourseImageComponent

  constructor(){
  }


  ngAfterViewInit(): void {
      console.log(this.image);
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
