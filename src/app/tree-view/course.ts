export class course {
  name: string;
  fullName: string;
  academHours: number;
  description: string;
  parent: course;
  elements: Array<course>;
  expanded: boolean;
  checked: boolean;

  constructor(name: string, parent: course, elements: Array<course>,
              fullName: string, academHours: number, description: string) {
    this.name = name;
    this.parent = parent;
    this.elements = elements;
    this.fullName = fullName;
    this.academHours = academHours;
    this.description = description;
    this.expanded = false;
    this.checked = false;
  }

  check() {
    let checkState = this.checked;
    this.goToFirstParent(this);
    this.checked = !checkState;
  }

  goToFirstParent(element: course) {
    if (element.parent != null) {
      this.goToFirstParent(element.parent);
    } else {
      this.unchecked(element);
      this.uncheckedElements(element.elements);
    }
  }

  uncheckedElements(elements: Array<course>) {
    for (let elem of elements) {
      if (elem.elements != null) {
        this.uncheckedElements(elem.elements);
      }
      this.unchecked(elem);
    }
  }

  unchecked(elem: course) {
    elem.checked = false;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
