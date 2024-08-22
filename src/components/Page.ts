export interface IPage {
  formContainer: HTMLElement;
  todosContainer: HTMLElement[];
}

export class Page implements IPage {
  _formContainer: HTMLElement;
  _todosContainer: HTMLElement;

  constructor(protected container: HTMLElement) {
    this._formContainer = container.querySelector(".todo-form__container");
    this._todosContainer = container.querySelector(".todo-list");
  }

  set formContainer(formElement: HTMLFormElement | null) {
    if (formElement) {
      this._formContainer.replaceChildren(formElement);
    } else {
      this._formContainer.innerHTML = "";
    }
  }

  set todosContainer(items: HTMLElement[]) {
    this._todosContainer.replaceChildren(...items);
  }
}
