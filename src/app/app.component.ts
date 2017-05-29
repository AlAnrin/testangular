import {Component, DoCheck} from '@angular/core';
import {course} from './tree-view/course';

@Component({
  selector: 'my-app',
  template: `
    <div class="topSide">
      <div class="containerTopSide">
        <div id="logo" style="width: 46px; height: 46px; padding: 3px; margin-right: 5px"></div>
        <div class="divTopSide"><p style="margin: 12px">Курсы</p></div>
        <div class="divTopSide"><p style="margin: 12px">Статистика</p></div>
        <div style="width: 60%"></div>
        <div class="divTopSide" style="width: 54px; height: 54px">
          <button id="chat" style="width: 52px; height: 52px; border: transparent; padding: 0px; margin: 0px">            
          </button>
        </div>
        <div class="divTopSide" style="width: 54px; height: 54px">
          <button id="search" style="width: 52px; height: 52px; border: transparent; padding: 0px; margin: 0px">
          </button>
        </div>
        <div style="text-align: right; white-space: nowrap; margin-left: 5px; margin-right: 5px" class="divTopSide">
          <h2>{{fioUser}}</h2>
        </div>
      </div>
    </div>
    <div class="pageSide">
      <div class="leftSideBar">
        <div class="buttonSideBar">
          <div class="divButtons">
            <div class="tooltip">
              <button id="courseOpenLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новый курс</span>
            </div>                         
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="folderLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новая папка</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="ietrLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новый ИЭТР</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="manualsLight" class="buttonLeftSide"></button>
              <span class="tooltiptext"></span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="lectureLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новая лекция</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="posterLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новый постер</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="ptTrainingLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новая тренировка</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="ptNormativeLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новый норматив</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="testLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Новый тест</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="updateLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Обновить</span>
            </div>
          </div>
          <div class="divButtons">
            <div class="tooltip">
              <button id="deleteLight" class="buttonLeftSide"></button>
              <span class="tooltiptext">Удалить</span>
            </div>
          </div>
        </div>
        <div class="utkSide">
          <h1>УТК (Учебные курсы)</h1>
          <tree-view [courses]="courses"></tree-view>
        </div>
      </div>
      <div class="courseFolder" *ngIf="selectCourse!=null">
        <div style="width: 100%; display: flex; flex-direction: row; position: relative">
          <div style="display: flex; flex-direction: column; height: 100%; width: 90%;">
            <h1>Учебно-тренировочный комплекс</h1>
          </div>
          <div style="width: 10%; align-items: right">
            <div class="divButtons" id="save" style="margin: 3px"></div>
          </div>
        </div>
        <course-folder [selectCourse]="selectCourse"></course-folder>
      </div>
    </div>
  `,
})

export class AppComponent implements DoCheck {
  fioUser = 'Студентов Студент Студентович';
  courses: Array<course>;
  selectCourse: course;

  constructor() {
    const utkbis1 = new course('УТК-БИС1', null, [], 'Учебно тренировочные комплексы', 40, 'бла-бла-утк');
    utkbis1.elements = [new course('1', utkbis1, [], '', 40, ''), new course('2', utkbis1, [], '', 40, '')];
    const utkbis2 = new course('УТК-БИС2', null, [], '', 40, '');
    utkbis2.elements = [new course('3', utkbis2, [], '', 40, ''), new course('4', utkbis2, [], '', 40, ''),
      new course('5', utkbis2, [], '', 40, '')];
    const utk = new course('УТК', null, [utkbis1, utkbis2], '', 40, '');
    utkbis1.parent = utk;
    utkbis2.parent = utk;

    this.courses = [utk];
    this.selectCourse = null;
  }

  ngDoCheck() {
    let q = this.findCheckCourse(this.courses);
    this.selectCourse = (q === undefined) ? null : q;
  }

  findCheckCourse(courses: Array<course>): any {
    let find = courses.find(x => x.checked === true);
    if (find == null) {
      for (let course of courses) {
        if (course.elements != null) {
          find = this.findCheckCourse(course.elements);
          if (find !== undefined) {
            break;
          }
        }
      }
    }
    return find;
  }

  saveButtonClick() {
  }
}
