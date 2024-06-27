import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
  standalone: true
})
export class HighlightedDirective {

  constructor() { 
    console.log("Directive created...")
  }


  @Output()
  toggleHighlight = new EventEmitter();

  @Input('highlighted')
  isHighLighted: boolean = false;

  @HostBinding('class.highlighted')
  get cssClasses() {
    return  this.isHighLighted;
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return "true";
  }


  @HostListener('mouseover', ['$event'])
  mouseOver($event) {
    
    console.log($event);
    this.isHighLighted = true; 
    this.toggleHighlight.emit(this.isHighLighted );
  
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighLighted = false; 
    this.toggleHighlight.emit(this.isHighLighted );

  }


  toggle(){
    this.isHighLighted = !this.isHighLighted;
    this.toggleHighlight.emit(this.isHighLighted );

  }


}
