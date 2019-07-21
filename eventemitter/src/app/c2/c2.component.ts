import { Component, OnInit, Inject } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
uname:String;
  constructor(@Inject(S1Service) public ser) {
    this.ser.myevent.subscribe(dt=>{
this.uname=(dt.uname)
      alert("Subscribed")
    })
   }

  ngOnInit() {
  }

}
