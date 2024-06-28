import {
    AfterContentInit,
    AfterViewInit,
    Attribute,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Optional,
    Output,
    QueryList,
    Self,
    SkipSelf,
    ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: true,
    imports:[NgIf, NgSwitch, NgSwitchCase, CourseImageComponent],
})
export class CourseCardComponent implements OnInit {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;
    
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string
    ) {
        console.log(type);
    }

    ngOnInit() {

    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
