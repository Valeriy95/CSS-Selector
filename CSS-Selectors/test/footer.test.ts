import { NewElementImage } from "../src/components/footer/footer";
import { IElementImage } from "../src/types/types";

describe('NewElementImage', () => {
    let newElement: IElementImage;
  
    beforeEach(() => {
      newElement = new NewElementImage('img', 'my-class', 'path/to/image.jpg', 'Image Alt');
    });
  
    it('changeImage() should set the src attribute', () => {
      newElement.changeImage('new/path/to/image.jpg');
      expect(newElement.returnElement().getAttribute('src')).toBe('new/path/to/image.jpg');
    });

  });
    