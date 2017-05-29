import {Component, Input} from '@angular/core';
import {course} from './course';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.html'
})

export class TreeView {
  @Input() courses: Array<course>;
}
