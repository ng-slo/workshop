import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyLevelComponent } from './family-level.component';

describe('FamilyLevelComponent', () => {
  let component: FamilyLevelComponent;
  let fixture: ComponentFixture<FamilyLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
