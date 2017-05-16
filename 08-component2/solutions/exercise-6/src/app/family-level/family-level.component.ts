import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "app/shared/person.interface";

@Component({
  selector: 'family-level',
  templateUrl: './family-level.component.html',
  styleUrls: ['./family-level.component.scss']
})
export class FamilyLevelComponent implements OnInit {
  @Input() family;
  @Input() editMode: boolean;
  @Output() levelLoved: EventEmitter<string> = new EventEmitter();
  @Output() onAddFamily: EventEmitter<Person> = new EventEmitter();

  firstName: string;
  lastName: string;
  connection: string;
  gender: string;
  imageNumber: string;

  constructor() { }

  ngOnInit() {
  }

  onPersonLoved(loved: string) {
    this.levelLoved.emit(loved);
  }

  addPerson() {
    const newPerson: Person = {
      firstName: this.firstName,
      lastName: this.lastName,
      connection: this.connection,
      image: this.imageLink
    };

    this.onAddFamily.emit(newPerson);

    this.firstName = '';
    this.lastName = '';
    this.connection = '';
    this.gender = '';
    this.imageNumber = '';
  }

  get imageLink() {
    return `https://randomuser.me/api/portraits/${this.gender}/${this.imageNumber}.jpg`;
  }
}
