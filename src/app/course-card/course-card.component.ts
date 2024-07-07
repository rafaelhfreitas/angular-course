import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    QueryList,
    Self,
    SimpleChanges,
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
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterViewChecked {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;
    
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string,
                private changeDetector: ChangeDetectorRef
    ) {
        console.log('constructor', this.course);

    }


    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked');

    }


    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked');

    }


    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }


    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }


    ngOnInit() {
        console.log('ngOnInity', this.course);

    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }




}
