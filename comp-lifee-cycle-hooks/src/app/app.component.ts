import { Component,OnInit,DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  sno:number=100
ngOnInit(){
  console.log("Component Init...")
}
ngDoCheck(){
  console.log("Data updating...")
}
ngAfterViewChecked(){
  console.log("View updated...")
}
ngOnDestroy(){
  console.log("Compo Dest...")
}
}
