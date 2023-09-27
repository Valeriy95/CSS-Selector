import { NewElementInput } from "../src/components/editor/editor";
import { IElementInput } from "../src/types/types";

describe('NewElementInput', () => {
    let newElement: IElementInput;


    beforeEach(() => {
      newElement = new NewElementInput('input', 'test_class', 'Hello World!');
    });
  
    it('returnInput() should return an HTML element as input', () => {
        expect(newElement.returnInput()).toBeInstanceOf(HTMLInputElement);
    });

    it('setPlaceholder() should set the new value of the placeholder', () => {
        newElement.setPlaceholder('Hi!');
        expect(newElement.returnInput().getAttribute('placeholder')).toBe('Hi!');
    });

    it('setValue() should clear the value of the input field', () => {
        newElement.setValue();
        expect(newElement.getValue()).toBe('');
    });

    it('changeDisabled() should set the disabled attribute', () => {
        newElement.changeDisabled('true');
        expect(newElement.returnInput().hasAttribute('disabled')).toBe(true);
    });
})
