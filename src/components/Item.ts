import { IItem } from "../types";

export interface IViewItem {
  id: string;
  name: string;
  render(item: IItem): HTMLElement;
}

export interface IViewItemConstructor {
  new (template: HTMLTemplateElement): IViewItem;
}

export class Item implements IViewItem {
  //свойства класса
  protected itemElement: HTMLElement;
  protected title: HTMLElement;
  protected _id: string;
  //конструктор класса
  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content
      .querySelector(".todo-item")
      .cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector(".todo-item__text");
  }

  set id(value: string) {
    this._id = value
  }

  get id(): string {
    return this._id || ''
  }

  set name(value: string) {
    this.title.textContent = value
  }

  get name(): string {
    return this.title.textContent || ''
  }
  // методы класса
  render(item: IItem) {
    this.name = item.name
    this.id = item.id
    return this.itemElement;
  }
}
