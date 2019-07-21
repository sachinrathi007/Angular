import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  t1;t2;res
  funadd(){
    this.res=(parseInt(this.t1)+parseInt(this.t2))
  }
}
