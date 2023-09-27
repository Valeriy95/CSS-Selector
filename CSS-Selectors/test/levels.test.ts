import { currentLevel, getLocalStorageLevel } from "../src/components/levels/levels";

describe('getLocalStorageLevel', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    it('getLocalStorageLevel() should set the value of currentLevel to 1 if localStorage does not contain the value of currentLevel', () => {
      getLocalStorageLevel();
      expect(currentLevel).toBe(1);
    });
  
    it('getLocalStorageLevel() should set the value of currentLevel from localStorage if present', () => {
      localStorage.setItem('currentLevel', '3');
      getLocalStorageLevel();
      expect(currentLevel).toBe(3);
    });
  
  });