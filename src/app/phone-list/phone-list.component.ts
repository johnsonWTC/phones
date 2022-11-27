import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { phone } from '../phone/phone.component';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  constructor() { }


  @Input() phoneList : phone[] = [];
  @Output() selectedPhone = new EventEmitter<phone>()
  ngOnInit(): void {
  }

  WhenAphoneIsSelected(phone:phone){
    this.selectedPhone.emit(phone);
  }

}
