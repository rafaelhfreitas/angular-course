import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    ContentChildren,
    effect,
    ElementRef,
    EventEmitter,
    input,
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
    imports:[NgIf, NgSwitch, NgSwitchCase, CourseImageComponent ],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {

    course = input<Course>();

    // @Input()
    // cardIndex: number;
    
    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();

    constructor(private coursesService: CoursesService,
                @Attribute('type') private type: string,
    ) {
        // console.log('constructor', this.course());

        effect(() => {
            console.log(`New course value: `, this.course());
        })

    }



    ngOnDestroy(): void {
        console.log("ngOnDestroy");
    }


    // ngOnInit() {
    //     console.log('ngOnInity', this.course());

    //     const description = computed(() => {
    //         const course = this.course();
    //         return course.description + '(' + course.category + ')';
    //     })

    // }

    onTitleChanged(newTitle: string) {
        this.course().description = newTitle;

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course(), description});

    }




}
