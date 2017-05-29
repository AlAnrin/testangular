import {Component, Input} from '@angular/core';
import {course} from './course';

@Component({
  selector: 'course-folder',
  templateUrl: './course-folder.html'
})

export class CourseFolder {
  @Input() selectCourse: course;
}
