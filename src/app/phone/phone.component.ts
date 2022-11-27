import { Component, OnInit } from '@angular/core';

export interface phone {
  name : string,
  size: number
} 

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  phones : phone [] = [];
  ngOnInit(): void {
    this.phones = [
      {
        name :"iPhone",
        size :11,
      },
      {
        name :"Xaomi",
        size :10,
      },
      {
        name :"Zender",
        size :9,
      }
    ]
  }

  reactionMethod(phone :phone){
    alert(phone.name + " selected")
  }

}
