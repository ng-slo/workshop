import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'family-level',
  templateUrl: './family-level.component.html',
  styleUrls: ['./family-level.component.css']
})
export class FamilyLevelComponent implements OnInit {
  @Input() family;

  constructor() { }

  ngOnInit() {
  }

}
