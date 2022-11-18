import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoThing]'
})
export class DoThingDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'beige';
 }

}
