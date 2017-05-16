import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'family-level',
  templateUrl: './family-level.component.html',
  styleUrls: ['./family-level.component.scss']
})
export class FamilyLevelComponent implements OnInit {
  @Input() family;
  @Input() editMode: boolean;
  @Output() levelLoved = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPersonLoved(loved: string) {
    this.levelLoved.emit(loved);
  }

}
