import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  constructor() { 
    console.log("Directive created...")
  }


  @Input('highlighted')
  isHighLighted: boolean = false;



  @HostBinding('class.highlighted')
  get cssClasses() {
    return  this.isHighLighted;
  }

}
