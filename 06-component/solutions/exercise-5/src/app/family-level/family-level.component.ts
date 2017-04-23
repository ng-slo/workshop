import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'family-level',
  templateUrl: './family-level.component.html',
  styleUrls: ['./family-level.component.css']
})
export class FamilyLevelComponent implements OnInit {
  @Input() family;
  @Output() levelLoved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPersonLoved(loved: string) {
    this.levelLoved.emit(loved);
  }

}
