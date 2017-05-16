import {Component, EventEmitter, Input, OnInit, Output, HostBinding, HostListener} from '@angular/core';
import {Person} from "app/shared/person.interface";

@Component({
  selector: 'family-person',
  templateUrl: './family-person.component.html',
  styleUrls: ['./family-person.component.scss']
})
export class FamilyPersonComponent implements OnInit {
  @Input() person: Person;
  @Output() personLoved = new EventEmitter();
  counter = 0;

  @HostBinding('style.backgroundColor') bgColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = '#ff4c4c' ;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent' ;
  }

  @HostListener('click')
  love() {
    this.counter++;
    this.personLoved.emit(this.person.firstName);
  }

  constructor() { }

  ngOnInit() {
  }
}
