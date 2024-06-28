import {Directive, EventEmitter, Host, HostBinding, HostListener, Input, Output} from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl',
    standalone: true
})
export class HighlightedDirective {

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

    constructor(private courseService: CoursesService) {

        console.log('Directive created..');
        console.log('courseService hghtLighted ', this.courseService );

    }

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    @HostListener('mouseover', ['$event'])
    mouseOver($event) {

        console.log($event);

        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    toggle() {
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }



}
