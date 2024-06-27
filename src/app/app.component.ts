import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from './course-image/course-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HighlightedDirective, NgIf, CourseCardComponent, CourseImageComponent, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;

    @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted: HighlightedDirective;

    constructor() {

    }

    onToggle(isHighLighted: boolean){

      console.log(isHighLighted);

    }

    ngAfterViewInit() {

      console.log(this.highlighted);

    }

    onCourseSelected(course:Course) {

    }

}
