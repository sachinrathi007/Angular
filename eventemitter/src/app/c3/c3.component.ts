import { Component, OnInit, Inject } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor(@Inject(S1Service) public ser) {
    this.ser.myevent.subscribe(dt=>{
      alert("From c3")
    })
   }

  ngOnInit() {
  }

}
