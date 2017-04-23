import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'family-person',
  templateUrl: './family-person.component.html',
  styleUrls: ['./family-person.component.css']
})
export class FamilyPersonComponent implements OnInit {
  @Input() person;
  @Output() personLoved = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  love() {
    this.counter++;
    this.personLoved.emit(this.person.firstName);
  }

}
