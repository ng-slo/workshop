import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'family-person',
  templateUrl: './family-person.component.html',
  styleUrls: ['./family-person.component.css']
})
export class FamilyPersonComponent implements OnInit {
  @Input() person;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  love() {
    this.counter++;
  }

}
