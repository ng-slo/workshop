import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
  image: string;
  connection: string;
  level: number;
}

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent implements OnInit {
  public me = {
    firstName: 'Nejc',
    lastName: 'Zdovc'
  };

  public familyOne: Person[] = [
    {
      firstName: 'John',
      lastName: 'Smith',
      connection: 'brother',
      image: 'https://randomuser.me/api/portraits/men/83.jpg',
      level: 1
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      image: 'https://randomuser.me/api/portraits/women/11.jpg',
      connection: 'sister',
      level: 1
    },
    {
      firstName: this.me.firstName,
      lastName: this.me.lastName,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      connection: 'me',
      level: 1
    }
  ];

  public familyTwo: Person[] = [
    {
      firstName: 'Jack',
      lastName: 'Smith',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      connection: 'father',
      level: 2
    },
    {
      firstName: 'Rachel',
      lastName: 'Smith',
      image: 'https://randomuser.me/api/portraits/women/88.jpg',
      connection: 'mother',
      level: 2
    }
  ];

  public familyThree: Person[] = [
    {
      firstName: 'Brian',
      lastName: 'Smith',
      image: 'https://randomuser.me/api/portraits/men/99.jpg',
      connection: 'grandpa',
      level: 3
    },
    {
      firstName: 'Lily',
      lastName: 'Smith',
      image: 'https://randomuser.me/api/portraits/women/76.jpg',
      connection: 'grandma',
      level: 3
    },
    {
      firstName: 'Owen',
      lastName: 'Grey',
      image: 'https://randomuser.me/api/portraits/men/66.jpg',
      connection: 'grandpa',
      level: 3
    },
    {
      firstName: 'Cristina',
      lastName: 'Grey',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      connection: 'grandma',
      level: 3
    }
  ];

  public totalLove = 0;
  public lastLoved = '';

  constructor() { }

  ngOnInit() {
  }

  onLevelLoved(loved: string) {
    this.totalLove++;
    this.lastLoved = loved;
  }

}
