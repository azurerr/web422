import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Output() btnClicked = new EventEmitter();


  btnOneClicked(){
    console.log("btnOneClicked")
    this.btnClicked.emit("Button One Clicked");
  }

  btnTwoClicked(){
    this.btnClicked.emit("Button Two Clicked");
  }

  constructor() { }

  ngOnInit() {
    
  }

}
