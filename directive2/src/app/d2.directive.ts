import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appD2]'
})
export class D2Directive {

  constructor(public el:ElementRef) { 
    this.el.nativeElement.style.color="yellow"
  }

}
