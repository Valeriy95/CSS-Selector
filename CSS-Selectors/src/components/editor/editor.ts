import { IElement, IElementInput, IElementText } from "../../types/types";
import { arrLevelsLabel, changeLabelImg, currentLevel, eightLevel, elevenLevel, fiveLevel, fourLevel, nineLevel, oneLevel, sevenLevel, sixLevel, tenLevel, threeLevel, twoLevel } from "../levels/levels";
import { NewElement, NewElementWithText, leftColumn } from "../title/title";
import './editor.css'
import hljs from "highlight.js";

hljs.configure({
  cssSelector: 'pre div'
});

export class NewElementInput extends NewElement  {
  constructor(tagName: keyof HTMLElementTagNameMap, nameClass: string, placeholder: string) {
    super(tagName, nameClass);
    this.element.setAttribute('placeholder', placeholder);
  }

  public returnInput(): HTMLInputElement {
    return this.element as HTMLInputElement;
  }

  public setPlaceholder(attribure: string): void {
    this.element.setAttribute('placeholder', attribure);
  }

  public setValue(): void {
    (this.element as HTMLInputElement).value = '';
  }

  public getValue(): string {
    return (this.element as HTMLInputElement).value;
  }

  public changeDisabled(attribure: string): void {
    this.element.setAttribute('disabled', attribure);
  }
}

export class NewElementPre extends NewElement  {
  constructor(tagName: keyof HTMLElementTagNameMap, nameClass: string, text: string, attr: string) {
    super(tagName, nameClass);
    this.element.innerHTML = text;
    this.element.setAttribute('data-id', attr);
  }
}

const editor: IElement = new NewElement('div', 'editor');
const cssEditor: IElement = new NewElement('div', 'css_editor');
const cssEditorTitle: IElement = new NewElement('div', 'css_editor_title');
const cssEditorTitleName: IElementText = new NewElementWithText('p', 'css_editor_title__name', 'CSS Editor');
const cssEditorTitleFile: IElementText = new NewElementWithText('p', 'css_editor_title__file', 'style.css');
const cssEditorDisplay: IElement = new NewElement('div', 'css_editor_display');
const cssEditorColumn: IElementText = new NewElementWithText('div', 'css_editor_display__columns', '1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10 <br> 11 <br> 12 <br> 13 <br> 14 <br> 15 <br> 16 <br> 17 <br> 18 <br> 19 <br> 20');
const cssEditorView: IElement = new NewElement('div', 'css_editor_view');
export const cssEditorInput: IElementInput = new NewElementInput('input', 'css_editor_view__input animation_flashing', 'Type in CSS selector');
const cssEditorBtnEnter: IElementText = new NewElementWithText('div', 'css_editor_view__btn', 'Enter');

const htmlViewer: IElement = new NewElement('div', 'viewer');
const htmlViewerTitle: IElement = new NewElement('div', 'viewer_title');
const htmlViewerTitleName: IElementText = new NewElementWithText('p', 'css_editor_title__name', 'HTML Viewer');
const htmlViewerTitleFile: IElementText = new NewElementWithText('p', 'css_editor_title__file', 'table.html');
const htmlViewerDisplay: IElement = new NewElement('div', 'viewer_display');
const htmlViewerColumn: IElementText = new NewElementWithText('div', 'viewer_display__columns', '1 <br> 2 <br> 3 <br> 4 <br> 5 <br> 6 <br> 7 <br> 8 <br> 9 <br> 10 <br> 11 <br> 12 <br> 13 <br> 14 <br> 15 <br> 16 <br> 17 <br> 18 <br> 19 <br> 20');
const htmlViewerContent: IElement = new NewElement('div', 'viewer_content');
export const htmlViewerPre: IElement = new NewElement('pre', 'viewer_content__code language-html');

export const htmlViewerCode: IElement = new NewElement('code', 'language-javascript');

export function createEditor (): void {
  editor.appendTo(leftColumn.returnElement());
  cssEditor.appendTo(editor.returnElement());
  cssEditorTitle.appendTo(cssEditor.returnElement());
  cssEditorTitleName.appendTo(cssEditorTitle.returnElement());
  cssEditorTitleFile.appendTo(cssEditorTitle.returnElement());
  cssEditorDisplay.appendTo(cssEditor.returnElement());
  cssEditorColumn.appendTo(cssEditorDisplay.returnElement());
  cssEditorView.appendTo(cssEditorDisplay.returnElement());
  cssEditorInput.appendTo(cssEditorView.returnElement());
  cssEditorBtnEnter.appendTo(cssEditorView.returnElement());
  cssEditorBtnEnter.appendTo(cssEditorView.returnElement());

  htmlViewer.appendTo(editor.returnElement());
  htmlViewerTitle.appendTo(htmlViewer.returnElement());
  htmlViewerTitleName.appendTo(htmlViewerTitle.returnElement());
  htmlViewerTitleFile.appendTo(htmlViewerTitle.returnElement());
  htmlViewerDisplay.appendTo(htmlViewer.returnElement());
  htmlViewerColumn.appendTo(htmlViewerDisplay.returnElement());
  htmlViewerContent.appendTo(htmlViewerDisplay.returnElement());
  htmlViewerPre.appendTo(htmlViewerContent.returnElement());

  const textCode1: IElement = new NewElementPre('div', 'hljs language-html', '&lt;div class="TABLE"&gt;\n', '')
  const textCode2: IElement = new NewElementPre('div', 'hljs language-html', '   &lt;square&gt;&lt;/square&gt;\n', '1');
  const textCode3: IElement = new NewElementPre('div', 'hljs language-html', '   &lt;circle&gt;&lt;/circle&gt;\n', '2');
  const textCode4: IElement = new NewElementPre('div', 'hljs language-html', '&lt;/div&gt;\n', '')

  htmlViewerPre.removeСontent();

  textCode1.appendTo(htmlViewerPre.returnElement());
  textCode2.appendTo(htmlViewerPre.returnElement());
  textCode3.appendTo(htmlViewerPre.returnElement());
  textCode4.appendTo(htmlViewerPre.returnElement());

  const elements1 = document.querySelectorAll(`[data-id="1"]`);
  const elements2 = document.querySelectorAll(`[data-id="2"]`);
  hoveringElements(elements1);
  hoveringElements(elements2);
}

export const answers: string[][] = [['square'], ['#green'], ['square elipse'], ['.yellow'], ['circle.yellow'], ['square elipse.yellow'], ['circle, square', 'square, circle'], ['square *, circle *', 'square elipse, circle elipse, square circle', 'circle *, square *'], ['circle + elipse'], ['elipse ~ circle']];
export let completeLabel: string[] = [];
cssEditorBtnEnter.returnElement().addEventListener('click', clickBtnEnter);


cssEditorInput.returnElement().addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    clickBtnEnter();
  }
});

export function resetCompleteLabel(): void {
  completeLabel = []; 
}

function clickBtnEnter (): void {
  cssEditorBtnEnter.addClass('animation_btn_enter');
  setTimeout((): void => cssEditorBtnEnter.removeClass('animation_btn_enter'), 200);
  const flashingElement = document.querySelectorAll('.anim');
  flashingElement.forEach(element => {
    element.classList.contains('anim');
  });
  const value: string = cssEditorInput.getValue().trim();
  let isAnswer = false;
  for (let i = 0; i < answers[currentLevel - 1].length; i += 1) {
    if (value === answers[currentLevel - 1][i]) {
      isAnswer = true;
      flashingElement.forEach(element => {
        if(element.classList.contains('anim')) {
          element.classList.remove('anim');
          element.classList.add('animation_win');
          completeLabel.push(String(currentLevel));
          changeLabelImg();
        }
      });
      setTimeout((): void => chooseLevel(currentLevel + 1), 1000);
    } 
  }
  if (isAnswer !== true) {
    editor.addClass('animation_shake');
    setTimeout((): void => editor.removeClass('animation_shake'), 500);
  }
}

export function chooseLevel(num: number): void {
  if(num === 1) {
    oneLevel();
  }
  if(num === 2) {
    twoLevel();
  }
  if(num === 3) {
    threeLevel();
  }
  if(num === 4) {
    fourLevel();
  }
  if(num === 5) {
    fiveLevel();
  }
  if(num === 6) {
    sixLevel();
  }
  if(num === 7) {
    sevenLevel();
  }
  if(num === 8) {
    eightLevel();
  }
  if(num === 9) {
    nineLevel();
  }
  if(num === 10) {
    tenLevel();
  }
  if(num === 11) {
    elevenLevel();
  }
} 

export function removeAnimationInput(): void {
  cssEditorInput.removeClass('animation_flashing');
}

cssEditorInput.returnElement().addEventListener('click', removeAnimationInput);

function setLocalStorage() {
  localStorage.setItem('completeLabel', [...new Set(completeLabel)].join(','));
}
window.addEventListener('beforeunload', setLocalStorage);

export function getLocalStorage() {
  if(localStorage.getItem('completeLabel')) {
    completeLabel = (localStorage.getItem('completeLabel') || '').split(',');
    for (let i = 0; i < completeLabel.length; i += 1) {
      arrLevelsLabel[Number(completeLabel[i]) - 1].changeImage('./images/logo/label-activ.png'); 
    }
  }
}
window.addEventListener('load', getLocalStorage);

export function hoveringElements(tag: NodeListOf<Element>) {
  tag.forEach(element => {
      element.addEventListener('mouseenter', () => {
          tag.forEach(el => {
              if(el.tagName === 'CIRCLE' || el.tagName === 'SQUARE' || el.tagName === 'ELIPSE') {
                  if(el.hasChildNodes()) {
                      el.classList.add('hovered_icon');
                      el.classList.add('hovered_tooltip')
                  } else {
                      const parent = el.parentElement;
                      parent?.classList.remove('hovered_icon');
                      parent?.classList.remove('hovered_tooltip');
                      el.classList.add('hovered_icon');
                      el.classList.add('hovered_tooltip');
                  }
              }    else {
                  el.classList.add('hovered_text');
              }
          });
      });

      element.addEventListener('mouseleave', () => {
          tag.forEach(el => {
          if(el.tagName === 'CIRCLE' || el.tagName === 'SQUARE' || el.tagName === 'ELIPSE') {
              if(el.hasChildNodes()) {
                  el.classList.remove('hovered_icon');
                  el.classList.remove('hovered_tooltip')
              } else {
                  const parent = el.parentElement;
                  if(parent?.className !== 'table' ) {
                      parent?.classList.add('hovered_icon');
                      parent?.classList.add('hovered_tooltip');
                  }
                  el.classList.remove('hovered_icon');
                  el.classList.remove('hovered_tooltip');
              }
          }    else {
              el.classList.remove('hovered_text');
          }
      });
      });
  });
}
