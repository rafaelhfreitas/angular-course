import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { NgIf } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CourseCardComponent, NgIf, CourseImageComponent]
})
export class AppComponent implements AfterViewInit{

  courses = COURSES;

  startDate = new Date(2000,0,1);
  title = COURSES[0].description;

  performPrefetch: boolean = false;
  display: boolean = false;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;


  ngAfterViewInit(): void {
    console.log('cards', this.cards.first);

    this.cards.changes.subscribe(
      cards =>  console.log(cards)
    )
  }
  
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


  onCoursesEdited(){
    this.courses.push(
      {
        id: 11,
        description: "Angular Rafael",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    )
  }


    

}
