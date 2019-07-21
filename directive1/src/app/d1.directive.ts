import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'appD1'
})
export class D1Directive {

  constructor(public el:ElementRef) { 
    el.nativeElement.style.color="red"
    el.nativeElement.style.fontWeight="bold"
    el.nativeElement.style.textDecoration="underline"
  }
@HostListener("click") funClick(){
alert("hi")
}
}
