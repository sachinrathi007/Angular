import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
myevent=new EventEmitter()
  constructor() { }
}
