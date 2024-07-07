import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, Inject, InjectionToken, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from './config';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe.pipe';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CourseCardComponent, AsyncPipe, NgIf, NgFor, CourseImageComponent, HighlightedDirective, FilterByCategoryPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;


  courses : Course[] = COURSES; 

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig
) {
  }


  ngOnInit() {  

    // console.log("ngOnInit")

    // this.courses$ = this.coursesService.loadCourses();

  }


  onEditCourse() {

    const course = this.courses[0];
    const newCourse: any = {...course, description: 'ngOnChanges'};
    this.courses[0] = newCourse;

    //this.courses[0].description = 'ngOnChanges';
    
      
  }

  save(course: Course){
    this.coursesService.saveCourse(course).subscribe(
      () => console.log('Course saved')
    );

  }



}
