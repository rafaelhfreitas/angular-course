import {AfterViewInit, Component, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';


function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CourseCardComponent, AsyncPipe, NgIf, NgFor, CourseImageComponent],
  providers: [
    { 
      provide: COURSES_SERVICE, 
      useFactory: coursesServiceProvider, 
      deps: [HttpClient] 
    }
  ]
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {

  }

  ngOnInit() {

    this.courses$ = this.coursesService.loadCourses();
  }


  save(course: Course){
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Course saved')
    );

  }



}
