export interface IForm {
  buttonText: string;
  placeholder: string;
  setHandler(handleFormSubmit: Function): void;
  render(): HTMLFormElement;
  setValue(data: string): void;
  getValue(): string;
  clearValue(): void;
}

export interface IFormConstructor {
  new (formTemplate: HTMLTemplateElement): IForm;
}

export class Form implements IForm {
  protected formElement: HTMLFormElement;
  protected inputElement: HTMLInputElement;
  protected handleFormSubmit: Function;
  protected submitButton: HTMLButtonElement;

  constructor(formTemplate: HTMLTemplateElement) {
    this.formElement = formTemplate.content
      .querySelector(".todos__form")
      .cloneNode(true) as HTMLFormElement;
    this.inputElement = this.formElement.querySelector(".form__input");
    this.submitButton = this.formElement.querySelector(".form__button-submit");
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this.inputElement.value);
    });
  }
  setHandler(handleFormSubmit: Function): void {
    this.handleFormSubmit = handleFormSubmit;
  }

  render() {
    return this.formElement;
  }
  setValue(data: string) {
    this.inputElement.value = data;
  }
  getValue() {
    return this.inputElement.value;
  }
  clearValue() {
    this.formElement.reset();
  }

  set buttonText(data: string) {
    this.submitButton.textContent = data;
  }

  set placeholder(data: string) {
    this.inputElement.placeholder = data;
  }
}
