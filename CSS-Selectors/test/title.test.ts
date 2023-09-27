import { NewElement, NewElementWithText } from "../src/components/title/title";
import { IElement, IElementText } from "../src/types/types";


describe('NewElement', () => {
    let newElement: IElement;
    let parentElement: HTMLElement;
  
    beforeEach(() => {
      parentElement = document.createElement('div');
      newElement = new NewElement('div', 'test_class');
    });
  
    it('returnElement() should return the underlying HTML element', () => {
      expect(newElement.returnElement()).toBeInstanceOf(HTMLElement);
    });
  
    it('appendTo() must add element to parent element', () => {
      newElement.appendTo(parentElement);
      expect(parentElement.children).toContain(newElement.returnElement());
    });
  
    it('addClass() should add a class to the element', () => {
      newElement.addClass('test__class__2');
      expect(newElement.hasClass('test__class__2')).toBe(true);
    });

    it('removeClass() should remove the specified class from the element', () => {
        newElement.removeClass('test_class');
        expect(newElement.hasClass('test_class')).toBe(false);
    });

    it('nameClass() should return the class name of the element', () => {
        expect(newElement.nameClass()).toBe('test_class');
    });

    it('toggleClass() should toggle element class', () => {
        newElement.addClass('test_class_2');
        newElement.toggleClass('test_class_2');
        expect(newElement.hasClass('test_class_2')).toBe(false);
    })

    it('returnHTML() should return the HTML content of the element', () => {
        newElement.appendTo(parentElement);
        newElement.returnElement().innerHTML = '<p>Hello, world!</p>';
        expect(newElement.returnHTML()).toBe('<p>Hello, world!</p>');
    })

    it('removeСontent() should clear the contents of the element', () => {
        newElement.appendTo(parentElement);
        newElement.returnElement().innerHTML = '<p>Hello, world!</p>';
        newElement.removeСontent();
        expect(newElement.returnElement().innerHTML).toBe('');
    });

    it('changeWidth() should change the width of the element', () => {
        newElement.changeWidth('50px');
        expect(newElement.returnElement().style.width).toBe('50px');  
    });
})

describe('NewElementWithText', () => { 
    let newElement: IElementText;

    beforeEach(() => {
        newElement = new NewElementWithText('div', 'test_class', 'Hello World!');
    });

    it('changeText() should change the content', () => {
        newElement.changeText('Hi!');
        expect(newElement.returnHTML()).toBe('Hi!');  
    });

})