import { IElement, IElementImage, IElementText } from "../../types/types";
import { NewElement, NewElementWithText, leftColumn } from "../title/title";
import './footer.css'

export class NewElementSetAttribute extends NewElement  {
    constructor(tagName: keyof HTMLElementTagNameMap, nameClass: string, link: string) {
      super(tagName, nameClass);
      this.element.setAttribute('href', link);
    }
}

export class NewElementImage extends NewElement  {
    constructor(tagName: keyof HTMLElementTagNameMap, nameClass: string, path: string, alt: string) {
      super(tagName, nameClass);
      this.element.setAttribute('src', path);
      this.element.setAttribute('alt', alt);
    }

    public changeImage (text: string): void {
      this.element.setAttribute('src', text);
    }
}

const footer: IElement = new NewElement('div', 'footer');
const htmlViewerCode: IElementText = new NewElementWithText('p', '', '2023');
const linkGithub: IElement = new NewElementSetAttribute('a', '', 'https://github.com/Valeriy95');
const imageGithub: IElementImage = new NewElementImage('img', 'logo__github', './images/logo/icon_github.png', 'logo-Github');


export function createFooter (): void {
    footer.appendTo(leftColumn.returnElement());
    htmlViewerCode.appendTo(footer.returnElement());
    linkGithub.appendTo(footer.returnElement());
    imageGithub.appendTo(linkGithub.returnElement());
}