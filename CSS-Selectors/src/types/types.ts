export interface IElement {
    returnElement(): HTMLElement;
    appendTo(parentElement: HTMLElement): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    hasClass(className: string): boolean;
    toggleClass(className: string): void;
    nameClass(): string;
    removeСontent(): void;
    returnHTML(): string;
    changeWidth(num: string): void;
}

export interface IElementTag {
    returnElement(): HTMLElement;
    appendTo(parentElement: HTMLElement): void;
    addClass(className: string): void;
    removeClass(className: string): void;
    hasClass(className: string): boolean;
    toggleClass(className: string): void;
    nameClass(): string;
    deleteChild(): void;
    returnHTML(): string;
    changeWidth(num: string): void;
}

export interface IElementInput extends IElement {
    returnInput(): HTMLInputElement;
    setPlaceholder(attribure: string): void;
    setValue(): void; 
    getValue(): string;
    changeDisabled(attribure: string): void; 
}

export interface IElementText extends IElement {
    changeText(text: string): void;
}

export interface IElementImage extends IElement {
    changeImage (text: string): void;
} 
