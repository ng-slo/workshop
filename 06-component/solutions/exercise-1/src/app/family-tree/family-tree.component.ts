import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit {
  name = 'Nejc Zdovc';

  constructor() { }

  ngOnInit() {
  }

}
