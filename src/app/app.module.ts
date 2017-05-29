import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TreeView} from './tree-view/tree-view';
import { AppComponent }  from './app.component';
import {CourseFolder} from './tree-view/course-folder';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TreeView, CourseFolder, AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
