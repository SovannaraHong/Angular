import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: '[app-binding]',
  imports: [NgClass, NgStyle],
  templateUrl: './binding.html',
  styleUrl: './binding.css',
})
export class Binding {
  name:string = 'Angular';
  myId:string = 'testId';
  disableBtn:boolean = false;
  hasError:boolean = true;
  myColor:string = 'blue';

  myStyle={
    "italic":true,
    "fontStyle":true,
    "bold":true,
    "bg-primary":true
  }
  myNgStyle={
    color:'orange',
    fontStyle:'italic',
    fontWeight:'bold'
  }
  myFun(){
    alert('Button clicked!');
  }

}
