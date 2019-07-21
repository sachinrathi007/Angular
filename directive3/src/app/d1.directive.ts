import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {
  constructor(public el:ElementRef,public rn:Renderer2) { 
    this.rn.addClass(this.el.nativeElement,"xyz")
  }
  @HostListener("click") funover(){
    alert("hi")
  }
  @HostListener("mouseover") funout(){
    this.rn.removeClass(this.el.nativeElement,"abc")
    this.rn.addClass(this.el.nativeElement,"xyz")
  }
}
