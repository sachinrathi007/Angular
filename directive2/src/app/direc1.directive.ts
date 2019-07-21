import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appDirec1]'
})
export class Direc1Directive {
  constructor(public ref:ElementRef) {
    this.ref.nativeElement.style.border="1px solid silver"
    this.ref.nativeElement.style.borderRadius="3px"
    this.ref.nativeElement.style.padding="4px"
    this.ref.nativeElement.style.width="200px"
    this.ref.nativeElement.style.outline="none"
   }
@HostListener("click") fun1(){
  alert(this.ref.nativeElement.innerHTML)
  this.ref.nativeElement.style.borderColor="blue"
  this.ref.nativeElement.style.boxShadow="0px 0px 5px blue"
}
@HostListener("blur") fun2(){
  this.ref.nativeElement.style.border="1px solid silver"
  this.ref.nativeElement.style.boxShadow="none"
}
}
