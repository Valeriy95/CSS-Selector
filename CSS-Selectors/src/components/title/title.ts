import { IElement, IElementText } from "../../types/types";
import './title.css'



export class NewElement {

  protected element: HTMLElement;
    constructor(tagName: string, nameClass: string) {
    this.element = document.createElement(tagName);
    this.element.className = nameClass;
  }
  
  public returnElement(): HTMLElement {
    return this.element;
  }

  public appendTo(parentElement: HTMLElement): void {
    parentElement.appendChild(this.element);
  }

  public addClass(className: string): void {
    this.element.classList.add(className);
  }
    
  public removeClass(className: string): void {
    this.element.classList.remove(className);
  }
    
  public hasClass(className: string): boolean {
    return this.element.classList.contains(className);
  }
    
  public toggleClass(className: string): void {
    this.element.classList.toggle(className);
  }

  public nameClass(): string {
    return this.element.className;
  }

  public removeСontent(): void {
    this.element.innerHTML = '';
  }

  public returnHTML(): string {
    return this.element.innerHTML;
  }

  public changeWidth(num: string): void {
    this.element.style.width = `${num}`;
  }

}

export class NewElementWithText extends NewElement  {
  constructor(tagName: keyof HTMLElementTagNameMap, nameClass: string, text: string) {
    super(tagName, nameClass);
    this.element.innerHTML = text;
}

  public changeText(text: string): void {
    this.element.innerHTML = text;
  }

}

const body = <HTMLElement>document.querySelector('.container');
export const leftColumn: IElement = new NewElement('div', 'game');
export const title: IElementText = new NewElementWithText ('h3', 'title', 'Select the blue square');

export function createLeftColumn (): void {
  body.append(leftColumn.returnElement());
}

export function createTitleAndBtnHelp (): void {
  title.appendTo(leftColumn.returnElement());
}
