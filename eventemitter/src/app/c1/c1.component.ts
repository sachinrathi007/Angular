import { Component, OnInit, Inject } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(@Inject(S1Service) public ser) {

   }
   txt1;
fun1(){
  var obj={uname:this.txt1,city:'Hyd'}
  this.ser.myevent.emit(obj)
}
  ngOnInit() {
  }

}
