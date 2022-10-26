import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book';
  msg:string = 'Hello'
 constructor(){

 }
 ngOnInIt(){
  console.log('hello')
 this.main(123456, this.useAsCallback)
 }
  useAsCallback(string:any){
  console.log("callback is being executed with passed parameter: " + string)
}
main(callBack:any, param:any){
  callBack(param)
}
 
}
