import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
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
export class CourseCardComponent implements AfterViewInit, AfterContentInit{


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

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent>;

  constructor(){
  }
  ngAfterContentInit(): void {
    console.log('After Content init' ,this.images);
  }


  ngAfterViewInit(): void { 
    
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
