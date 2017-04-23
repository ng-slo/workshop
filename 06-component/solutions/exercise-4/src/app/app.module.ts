import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { FamilyLevelComponent } from './family-level/family-level.component';
import { FamilyPersonComponent } from './family-person/family-person.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyTreeComponent,
    FamilyLevelComponent,
    FamilyPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
