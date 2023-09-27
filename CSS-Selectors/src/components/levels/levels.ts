import { NewElement, NewElementWithText, title } from "../title/title";
import { IElement, IElementImage, IElementText } from "../../types/types";
import { NewElementImage } from "../footer/footer";
import { NewElementPre, chooseLevel, completeLabel, cssEditorInput, hoveringElements, htmlViewerPre, resetCompleteLabel } from "../editor/editor";
import { gameDispay, table } from "../table/table";
import './levels.css'
import hljs from "highlight.js";

hljs.configure({
    cssSelector: 'pre div'
});

export class NewElementForTable extends NewElement  {
    constructor(tagName: string, nameClass: string, tooltip: string, dataNum: string, numId?: string) {
      super(tagName, nameClass);
      this.element.setAttribute('data-tooltip', tooltip)
      this.element.setAttribute('data-id', dataNum)
      this.element.id = numId ?? "";
    }
}

export let currentLevel = 1;

export const arrTask1: Array<[...string[]]> = [['square', 'anim', '<square></square>', '1'], ['circle', '', '<circle></circle>', '2']];
export const arrTask2: Array<[...string[]]> = [['circle', '', '<circle></circle>', '1'], ['square', '', '<square></square>', '2'], ['circle', 'anim', '<circle id="green"></circle>', '3', 'green']];
const arrTask3: Array<[...string[]]> = [['square', '', '<square></square>', '1'], ['elipse', 'anim', '<elipse></elipse>', '2'], ['elipse', '', '<elipse></elipse>', '3'], ['circle', '', '<circle></circle>', '4']];
const arrTask4: Array<[...string[]]> = [['circle', '', '<circle></circle>', '1'], ['elipse', 'yellow anim', '<elipse class="yellow"></elipse>', '2'], ['elipse', '', '<elipse></elipse>', '3'], ['square', '', '<square></square>', '4'], ['elipse', 'yellow anim', '<elipse class="yellow"></elipse>', '5']];
const arrTask5: Array<[...string[]]> = [['square', 'yellow', '<square class="yellow"></square>', '1'], ['circle', 'yellow anim', '<circle class="yellow"></circle>', '2'], ['circle', 'yellow anim', '<circle class="yellow"></circle>', '3'], ['circle', '', '<circle></circle>', '4']];
const arrTask6: Array<[...string[]]> = [['square', '', '<square></square>', '1'], ['elipse', 'yellow anim', '<elipse class="yellow"></elipse>', '2'], ['elipse', '', '<elipse></elipse>', '3'], ['square', '', '<square></square>', '4'], ['elipse', 'yellow anim', '<elipse class="yellow"></elipse>', '5'], ['elipse', 'yellow', '<elipse class="yellow"></elipse>', '6']];
const arrTask7: Array<[...string[]]> = [['circle', 'anim', '<circle></circle>', '1'], ['elipse', 'small', '<elipse class="small"></elipse>', '2'], ['square', 'anim', '<square></square>', '3'], ['elipse', '', '<elipse></elipse>', '4'], ['circle', 'anim', '<circle></circle>', '5']];
const arrTask8: Array<[...string[]]> = [['elipse', '', '<elipse></elipse>', '1'], ['square', '', '<square></square>', '2'], ['elipse', 'anim', '<elipse></elipse>', '3'], ['circle', '', '<circle></circle>', '4'], ['elipse', 'small anim', '<elipse class="small"></elipse>', '5'], ['square', '', '<square></square>', '6'], ['circle', 'small_circle anim', '<circle class="small"></circle>', '7'], ['square', '', '<square></square>', '8']];
const arrTask9: Array<[...string[]]> = [['elipse', '', '<elipse></elipse>', '1'], ['circle', '', '<circle></circle>', '2'], ['elipse', 'small', '<elipse class="small"></elipse>', '3'], ['elipse', 'anim', '<elipse></elipse>', '4'], ['square', '', '<square></square>', '5'], ['circle', '', '<circle></circle>', '6'], ['elipse', 'anim', '<elipse id="brown"></elipse>', '7', 'brown']];
const arrTask10: Array<[...string[]]> = [['elipse', '', '<elipse></elipse>', '1'], ['circle', 'anim', '<circle></circle>', '2'], ['square', '', '<square></square>', '3'], ['circle', 'small_circle', '<circle class="small"></circle>', '4'], ['circle', 'anim', '<circle></circle>', '5'], ['circle', 'anim', '<circle id="gray"></circle>', '6', 'gray'], ['square', '', '<square></square>', '7'], ['elipse', '', '<elipse></elipse>', '8']];

const body = <HTMLElement>document.querySelector('.container');
export const rightColumn: IElement = new NewElement('div', 'game_levels ');
const levelsTitle: IElementText = new NewElementWithText('h3', 'game_levels__title', 'Level');

const levelsNum1Wrapper: IElement = new NewElement('div', 'game_levels__wrapper1 active_background');
const levelsNum2Wrapper: IElement = new NewElement('div', 'game_levels__wrapper2');
const levelsNum3Wrapper: IElement = new NewElement('div', 'game_levels__wrapper3');
const levelsNum4Wrapper: IElement = new NewElement('div', 'game_levels__wrapper4');
const levelsNum5Wrapper: IElement = new NewElement('div', 'game_levels__wrapper5');
const levelsNum6Wrapper: IElement = new NewElement('div', 'game_levels__wrapper6');
const levelsNum7Wrapper: IElement = new NewElement('div', 'game_levels__wrapper7');
const levelsNum8Wrapper: IElement = new NewElement('div', 'game_levels__wrapper8');
const levelsNum9Wrapper: IElement = new NewElement('div', 'game_levels__wrapper9');
const levelsNum10Wrapper: IElement = new NewElement('div', 'game_levels__wrapper10');

const arrLevelsWrapper: IElement[] = [levelsNum1Wrapper, levelsNum2Wrapper, levelsNum3Wrapper, levelsNum4Wrapper, levelsNum5Wrapper, levelsNum6Wrapper, levelsNum7Wrapper, levelsNum8Wrapper, levelsNum9Wrapper, levelsNum10Wrapper];

const levelsLabel1: IElementImage = new NewElementImage('img', 'game_levels__label1', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel2: IElementImage = new NewElementImage('img', 'game_levels__label2', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel3: IElementImage = new NewElementImage('img', 'game_levels__label3', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel4: IElementImage = new NewElementImage('img', 'game_levels__label4', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel5: IElementImage = new NewElementImage('img', 'game_levels__label5', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel6: IElementImage = new NewElementImage('img', 'game_levels__label6', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel7: IElementImage = new NewElementImage('img', 'game_levels__label7', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel8: IElementImage = new NewElementImage('img', 'game_levels__label8', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel9: IElementImage = new NewElementImage('img', 'game_levels__label9', './images/logo/галочка-нефкт.png', 'check mark');
const levelsLabel10: IElementImage = new NewElementImage('img', 'game_levels__label10', './images/logo/галочка-нефкт.png', 'check mark');

export const arrLevelsLabel: IElementImage[] = [levelsLabel1, levelsLabel2, levelsLabel3, levelsLabel4, levelsLabel5, levelsLabel6, levelsLabel7, levelsLabel8, levelsLabel9, levelsLabel10];

const levelsNum1: IElementText = new NewElementWithText('p', 'game_levels__num1 active_lev', '1 &nbsp;&nbsp;&nbsp;&nbsp; A');
const levelsNum2: IElementText = new NewElementWithText('p', 'game_levels__num2', '2 &nbsp;&nbsp;&nbsp;&nbsp; #id');
const levelsNum3: IElementText = new NewElementWithText('p', 'game_levels__num3', '3 &nbsp;&nbsp;&nbsp;&nbsp; A B');
const levelsNum4: IElementText = new NewElementWithText('p', 'game_levels__num4', '4 &nbsp;&nbsp;&nbsp;&nbsp; .classname');
const levelsNum5: IElementText = new NewElementWithText('p', 'game_levels__num5', '5 &nbsp;&nbsp;&nbsp;&nbsp; A.classname');
const levelsNum6: IElementText = new NewElementWithText('p', 'game_levels__num6', '6 &nbsp;&nbsp;&nbsp;&nbsp; A B.classname');
const levelsNum7: IElementText = new NewElementWithText('p', 'game_levels__num7', '7 &nbsp;&nbsp;&nbsp;&nbsp; A, B');
const levelsNum8: IElementText = new NewElementWithText('p', 'game_levels__num8', '8 &nbsp;&nbsp;&nbsp;&nbsp; A *, B *');
const levelsNum9: IElementText = new NewElementWithText('p', 'game_levels__num9', '9 &nbsp;&nbsp;&nbsp;&nbsp; A + B');
const levelsNum10: IElementText = new NewElementWithText('p', 'game_levels__num10', '10 &nbsp;&nbsp;&nbsp;&nbsp; A ~ B');
const btn__wrapper: IElement = new NewElement('div', 'game_levels__wrapper_btn');
const btnReset: IElementText = new NewElementWithText('div', 'game_levels__btn_reset', 'Reset');

const btnHelp: IElementText = new NewElementWithText ('div', 'game_levels__btn_help', 'Help');

export const arrLevelsNum: IElementText[] = [levelsNum1, levelsNum2, levelsNum3, levelsNum4, levelsNum5, levelsNum6, levelsNum7, levelsNum8, levelsNum9, levelsNum10];

const levelsLabelHelp1: IElementText = new NewElementWithText('div', 'levels_label_help1 hidden', 'Help');
const levelsLabelHelp2: IElementText = new NewElementWithText('div', 'levels_label_help2 hidden', 'Help');
const levelsLabelHelp3: IElementText = new NewElementWithText('div', 'levels_label_help3 hidden', 'Help');
const levelsLabelHelp4: IElementText = new NewElementWithText('div', 'levels_label_help4 hidden', 'Help');
const levelsLabelHelp5: IElementText = new NewElementWithText('div', 'levels_label_help5 hidden', 'Help');
const levelsLabelHelp6: IElementText = new NewElementWithText('div', 'levels_label_help6 hidden', 'Help');
const levelsLabelHelp7: IElementText = new NewElementWithText('div', 'levels_label_help7 hidden', 'Help');
const levelsLabelHelp8: IElementText = new NewElementWithText('div', 'levels_label_help8 hidden', 'Help');
const levelsLabelHelp9: IElementText = new NewElementWithText('div', 'levels_label_help9 hidden', 'Help');
const levelsLabelHelp10: IElementText = new NewElementWithText('div', 'levels_label_help10 hidden', 'Help');

export const arrLevelsHelpLabel: IElementText[] = [levelsLabelHelp1, levelsLabelHelp2, levelsLabelHelp3, levelsLabelHelp4, levelsLabelHelp5, levelsLabelHelp6, levelsLabelHelp7, levelsLabelHelp8, levelsLabelHelp9, levelsLabelHelp10];
export let currentLabel: IElementImage = arrLevelsLabel[0];
const arrAnswers: string[] = ['square', '#green', 'square elipse', '.yellow', 'circle.yellow', 'square elipse.yellow', 'circle, square', 'square *, circle *', 'circle + elipse', 'elipse ~ circle'];
export let currentLabelHelp: IElementText = levelsLabelHelp1;
const burgerMenuWrapper: IElement = new NewElement('div', 'module__window');
const burgerMenu: IElementImage = new NewElementImage('img', 'burger__menu', './images/logo/burger-menu.png', 'burger-menu');
export let arrLabelHelp: string[] = [];

let isButtonActive = true;

export function createRightColumn (): void {
    body.append(rightColumn.returnElement());
    body.append(burgerMenuWrapper.returnElement());
    body.append(burgerMenu.returnElement());
}

export function createLevels (): void {
    levelsTitle.appendTo(rightColumn.returnElement());
    levelsNum1Wrapper.appendTo(rightColumn.returnElement());
    levelsNum2Wrapper.appendTo(rightColumn.returnElement());
    levelsNum3Wrapper.appendTo(rightColumn.returnElement());
    levelsNum4Wrapper.appendTo(rightColumn.returnElement());
    levelsNum5Wrapper.appendTo(rightColumn.returnElement());
    levelsNum6Wrapper.appendTo(rightColumn.returnElement());
    levelsNum7Wrapper.appendTo(rightColumn.returnElement());
    levelsNum8Wrapper.appendTo(rightColumn.returnElement());
    levelsNum9Wrapper.appendTo(rightColumn.returnElement());
    levelsNum10Wrapper.appendTo(rightColumn.returnElement());
    levelsLabel1.appendTo(levelsNum1Wrapper.returnElement());
    levelsNum1.appendTo(levelsNum1Wrapper.returnElement());
    levelsLabelHelp1.appendTo(levelsNum1Wrapper.returnElement());
    levelsLabel2.appendTo(levelsNum2Wrapper.returnElement());
    levelsNum2.appendTo(levelsNum2Wrapper.returnElement());
    levelsLabelHelp2.appendTo(levelsNum2Wrapper.returnElement());
    levelsLabel3.appendTo(levelsNum3Wrapper.returnElement());
    levelsNum3.appendTo(levelsNum3Wrapper.returnElement());
    levelsLabelHelp3.appendTo(levelsNum3Wrapper.returnElement());
    levelsLabel4.appendTo(levelsNum4Wrapper.returnElement());
    levelsNum4.appendTo(levelsNum4Wrapper.returnElement());
    levelsLabelHelp4.appendTo(levelsNum4Wrapper.returnElement());
    levelsLabel5.appendTo(levelsNum5Wrapper.returnElement());
    levelsNum5.appendTo(levelsNum5Wrapper.returnElement());
    levelsLabelHelp5.appendTo(levelsNum5Wrapper.returnElement());
    levelsLabel6.appendTo(levelsNum6Wrapper.returnElement());
    levelsNum6.appendTo(levelsNum6Wrapper.returnElement());
    levelsLabelHelp6.appendTo(levelsNum6Wrapper.returnElement());
    levelsLabel7.appendTo(levelsNum7Wrapper.returnElement());
    levelsNum7.appendTo(levelsNum7Wrapper.returnElement());
    levelsLabelHelp7.appendTo(levelsNum7Wrapper.returnElement());
    levelsLabel8.appendTo(levelsNum8Wrapper.returnElement());
    levelsNum8.appendTo(levelsNum8Wrapper.returnElement());
    levelsLabelHelp8.appendTo(levelsNum8Wrapper.returnElement());
    levelsLabel9.appendTo(levelsNum9Wrapper.returnElement());
    levelsNum9.appendTo(levelsNum9Wrapper.returnElement());
    levelsLabelHelp9.appendTo(levelsNum9Wrapper.returnElement());
    levelsLabel10.appendTo(levelsNum10Wrapper.returnElement());
    levelsNum10.appendTo(levelsNum10Wrapper.returnElement());
    levelsLabelHelp10.appendTo(levelsNum10Wrapper.returnElement());
    btn__wrapper.appendTo(rightColumn.returnElement());
    btnReset.appendTo(btn__wrapper.returnElement());
    btnHelp.appendTo(btn__wrapper.returnElement());
}


export function deleteClassActive(): void {
    levelsNum1.removeClass('active_lev');
    levelsNum2.removeClass('active_lev');
    levelsNum3.removeClass('active_lev');
    levelsNum4.removeClass('active_lev');
    levelsNum5.removeClass('active_lev');
    levelsNum6.removeClass('active_lev');
    levelsNum7.removeClass('active_lev');
    levelsNum8.removeClass('active_lev');
    levelsNum9.removeClass('active_lev');
    levelsNum10.removeClass('active_lev');
}



export function changeLabelImg(): void {
    currentLabel.changeImage('./images/logo/label-activ.png');
}


export function changeBackround(n: number): void {
    for(let i = 0; i < arrLevelsWrapper.length; i += 1) {
        arrLevelsWrapper[i].removeClass('active_background');
    }
    arrLevelsWrapper[n].addClass('active_background');
}

const arrFunctionLevels: (() => void)[] = [oneLevel, twoLevel, threeLevel, fourLevel, fiveLevel, sixLevel, sevenLevel, eightLevel, nineLevel, tenLevel];

export function oneLevel(): void {
    deleteClassActive();
    levelsNum1.addClass('active_lev');
    changeBackround(0);
    title.changeText('Select the blue square');
    gameDispay.changeWidth('30%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask1[0][0], arrTask1[0][1], arrTask1[0][2], arrTask1[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask1[1][0], arrTask1[1][1], arrTask1[1][2], arrTask1[1][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '')
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '&lt;/div&gt;\n', '')

    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());

    hljs.highlightAll();
    currentLabelHelp = levelsLabelHelp1;
    currentLabel = arrLevelsLabel[0];
    currentLevel = 1;
    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    isButtonActive = true;
    hideLevelsMenu();
}

export function twoLevel(): void {
    deleteClassActive();
    levelsNum2.addClass('active_lev');
    changeBackround(1);
    title.changeText('Select the green circle');
    gameDispay.changeWidth('36%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask2[0][0], arrTask2[0][1], arrTask2[0][2], arrTask2[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask2[1][0], arrTask2[1][1], arrTask2[1][2], arrTask2[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask2[2][0], arrTask2[2][1], arrTask2[2][2], arrTask2[2][3], arrTask2[2][4]);
    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '')
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;circle id="green"&gt;&lt;/circle&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '&lt;/div&gt;\n', '')
    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    currentLabelHelp = levelsLabelHelp2;
    currentLabel = arrLevelsLabel[1];
    currentLevel = 2;
    isButtonActive = true;
    hideLevelsMenu();
}

export function threeLevel(): void {
    deleteClassActive();
    levelsNum3.addClass('active_lev');
    changeBackround(2);
    title.changeText('Select the pink ellipse');
    gameDispay.changeWidth('36%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask3[0][0], arrTask3[0][1], arrTask3[0][2], arrTask3[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask3[1][0], arrTask3[1][1], arrTask3[1][2], arrTask3[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask3[2][0], arrTask3[2][1], arrTask3[2][2], arrTask3[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask3[3][0], arrTask3[3][1], arrTask3[3][2], arrTask3[3][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(elem1.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '      &lt;elipse&gt;&lt;/elipse&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '1');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '3');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '4');
    const textCode7: IElement = new NewElementPre('div', '', '&lt;/div&gt;', '');
    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());

    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);

    currentLabelHelp = levelsLabelHelp3;
    currentLabel = arrLevelsLabel[2];
    currentLevel = 3;
    isButtonActive = true;
    hideLevelsMenu();
}

export function fourLevel(): void {
    deleteClassActive();
    levelsNum4.addClass('active_lev');
    changeBackround(3);

    title.changeText('Select the yellow ellipses');
    gameDispay.changeWidth('36%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask4[0][0], arrTask4[0][1], arrTask4[0][2], arrTask4[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask4[1][0], arrTask4[1][1], arrTask4[1][2], arrTask4[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask4[2][0], arrTask4[2][1], arrTask4[2][2], arrTask4[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask4[3][0], arrTask4[3][1], arrTask4[3][2], arrTask4[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask4[4][0], arrTask4[4][1], arrTask4[4][2], arrTask4[4][3]);
    
    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(table.returnElement());
    elem5.appendTo(elem4.returnElement());
    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;elipse class="yellow"&gt;&lt;/elipse&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '4');
    const textCode6: IElement = new NewElementPre('div', '', '      &lt;elipse class="yellow"&gt;&lt;/elipse&gt;\n', '5');
    const textCode7: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '4');
    const textCode8: IElement = new NewElementPre('div', '', '&lt;/div&gt;\n', '');
    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    
    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);

    currentLabelHelp = levelsLabelHelp4;
    currentLabel = arrLevelsLabel[3];
    currentLevel = 4;
    isButtonActive = true;
    hideLevelsMenu();
}

export function fiveLevel(): void {
    deleteClassActive();
    levelsNum5.addClass('active_lev');
    changeBackround(4);
    title.changeText('Select the yellow circles');
    gameDispay.changeWidth('45%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask5[0][0], arrTask5[0][1], arrTask5[0][2], arrTask5[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask5[1][0], arrTask5[1][1], arrTask5[1][2], arrTask5[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask5[2][0], arrTask5[2][1], arrTask5[2][2], arrTask5[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask5[3][0], arrTask5[3][1], arrTask5[3][2], arrTask5[3][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;square class="yellow"&gt;&lt;/square&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;circle class="yellow"&gt;&lt;/circle&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;circle class="yellow"&gt;&lt;/circle&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '4');
    const textCode6: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');
    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);

    currentLabelHelp = levelsLabelHelp5;
    currentLabel = arrLevelsLabel[4];
    currentLevel = 5;
    isButtonActive = true;
    hideLevelsMenu();
}

export function sixLevel(): void {
    deleteClassActive();
    levelsNum6.addClass('active_lev');
    changeBackround(5);

    title.changeText('Select the flashing yellow ellipses');
    gameDispay.changeWidth('45%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask6[0][0], arrTask6[0][1], arrTask6[0][2], arrTask6[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask6[1][0], arrTask6[1][1], arrTask6[1][2], arrTask6[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask6[2][0], arrTask6[2][1], arrTask6[2][2], arrTask6[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask6[3][0], arrTask6[3][1], arrTask6[3][2], arrTask6[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask6[4][0], arrTask6[4][1], arrTask6[4][2], arrTask6[4][3]);
    const elem6: IElement = new NewElementForTable(arrTask6[5][0], arrTask6[5][1], arrTask6[5][2], arrTask6[5][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(elem1.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(table.returnElement());
    elem5.appendTo(elem4.returnElement());
    elem6.appendTo(table.returnElement());
    
    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '      &lt;elipse class="yellow"&gt;&lt;/elipse&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '1');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '3');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '4');
    const textCode7: IElement = new NewElementPre('div', '', '      &lt;elipse class="yellow"&gt;&lt;/elipse&gt;\n', '5');
    const textCode8: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '4');
    const textCode9: IElement = new NewElementPre('div', '', '   &lt;elipse class="yellow"&gt;&lt;/elipse&gt;\n', '6');
    const textCode10: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');
    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    textCode9.appendTo(htmlViewerPre.returnElement());
    textCode10.appendTo(htmlViewerPre.returnElement());

    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    const elements6: NodeListOf<Element> = document.querySelectorAll(`[data-id="6"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);
    hoveringElements(elements6);
    currentLabelHelp = levelsLabelHelp6;
    currentLabel = arrLevelsLabel[5];
    currentLevel = 6;
    isButtonActive = true;
    hideLevelsMenu();
}

export function sevenLevel(): void {
    deleteClassActive();
    levelsNum7.addClass('active_lev');
    changeBackround(6);

    title.changeText('Select the two circles and a square');
    gameDispay.changeWidth('45%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask7[0][0], arrTask7[0][1], arrTask7[0][2], arrTask7[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask7[1][0], arrTask7[1][1], arrTask7[1][2], arrTask7[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask7[2][0], arrTask7[2][1], arrTask7[2][2], arrTask7[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask7[3][0], arrTask7[3][1], arrTask7[3][2], arrTask7[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask7[4][0], arrTask7[4][1], arrTask7[4][2], arrTask7[4][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(elem1.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(table.returnElement());
    elem5.appendTo(table.returnElement());
    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;circle&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '      &lt;elipse class="small"&gt;&lt;/elipse&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;/circle&gt;\n', '1');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '3');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '4');
    const textCode7: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '5');
    const textCode8: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');

    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    
    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);

    currentLabelHelp = levelsLabelHelp7;
    currentLabel = arrLevelsLabel[6];
    currentLevel = 7;
    isButtonActive = true;
    hideLevelsMenu();
}

export function eightLevel(): void {
    deleteClassActive();
    levelsNum8.addClass('active_lev');
    changeBackround(7);


    title.changeText('Select the flashing elements');
    gameDispay.changeWidth('55%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask8[0][0], arrTask8[0][1], arrTask8[0][2], arrTask8[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask8[1][0], arrTask8[1][1], arrTask8[1][2], arrTask8[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask8[2][0], arrTask8[2][1], arrTask8[2][2], arrTask8[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask8[3][0], arrTask8[3][1], arrTask8[3][2], arrTask8[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask8[4][0], arrTask8[4][1], arrTask8[4][2], arrTask8[4][3]);
    const elem6: IElement = new NewElementForTable(arrTask8[5][0], arrTask8[5][1], arrTask8[5][2], arrTask8[5][3]);
    const elem7: IElement = new NewElementForTable(arrTask8[6][0], arrTask8[6][1], arrTask8[6][2], arrTask8[6][3]);
    const elem8: IElement = new NewElementForTable(arrTask8[7][0], arrTask8[7][1], arrTask8[7][2], arrTask8[7][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(elem2.returnElement());
    elem4.appendTo(table.returnElement());
    elem5.appendTo(elem4.returnElement());
    elem6.appendTo(table.returnElement());
    elem7.appendTo(elem6.returnElement());
    elem8.appendTo(table.returnElement());
    
    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '      &lt;elipse&gt;&lt;/elipse&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '2');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;circle&gt;\n', '4');
    const textCode7: IElement = new NewElementPre('div', '', '      &lt;elipse class="small"&gt;&lt;/elipse&gt;\n', '5');
    const textCode8: IElement = new NewElementPre('div', '', '   &lt;/circle&gt;\n', '4');
    const textCode9: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '6');
    const textCode10: IElement = new NewElementPre('div', '', '      &lt;circle class="small"&gt;&lt;/circle&gt;\n', '7');
    const textCode11: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '6');
    const textCode12: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '8');
    const textCode13: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');

    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    textCode9.appendTo(htmlViewerPre.returnElement());
    textCode10.appendTo(htmlViewerPre.returnElement());
    textCode11.appendTo(htmlViewerPre.returnElement());
    textCode12.appendTo(htmlViewerPre.returnElement());
    textCode13.appendTo(htmlViewerPre.returnElement());

    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    const elements6: NodeListOf<Element> = document.querySelectorAll(`[data-id="6"]`);
    const elements7: NodeListOf<Element> = document.querySelectorAll(`[data-id="7"]`);
    const elements8: NodeListOf<Element> = document.querySelectorAll(`[data-id="8"]`);
    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);
    hoveringElements(elements6);
    hoveringElements(elements7);
    hoveringElements(elements8);

    currentLabelHelp = levelsLabelHelp8;
    currentLabel = arrLevelsLabel[7];
    currentLevel = 8;
    isButtonActive = true;
    hideLevelsMenu();
}

export function nineLevel(): void {
    deleteClassActive();
    levelsNum9.addClass('active_lev');
    changeBackround(8);

    title.changeText('Select the flashing elements');
    gameDispay.changeWidth('55%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.returnInput().removeAttribute('disabled');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask9[0][0], arrTask9[0][1], arrTask9[0][2], arrTask9[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask9[1][0], arrTask9[1][1], arrTask9[1][2], arrTask9[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask9[2][0], arrTask9[2][1], arrTask9[2][2], arrTask9[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask9[3][0], arrTask9[3][1], arrTask9[3][2], arrTask9[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask9[4][0], arrTask9[4][1], arrTask9[4][2], arrTask9[4][3]);
    const elem6: IElement = new NewElementForTable(arrTask9[5][0], arrTask9[5][1], arrTask9[5][2], arrTask9[5][3]);
    const elem7: IElement = new NewElementForTable(arrTask9[6][0], arrTask9[6][1], arrTask9[6][2], arrTask9[6][3], arrTask9[6][4]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(elem2.returnElement());
    elem4.appendTo(table.returnElement());
    elem5.appendTo(table.returnElement());
    elem6.appendTo(table.returnElement());
    elem7.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;circle&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '      &lt;elipse class="small"&gt;&lt;/elipse&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '   &lt;/circle&gt;\n', '2');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '4');
    const textCode7: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '5');
    const textCode8: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '6');
    const textCode9: IElement = new NewElementPre('div', '', '   &lt;elipse id="brown"&gt;&lt;/elipse&gt;\n', '7');
    const textCode10: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');

    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    textCode9.appendTo(htmlViewerPre.returnElement());
    textCode10.appendTo(htmlViewerPre.returnElement());
    
    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    const elements6: NodeListOf<Element> = document.querySelectorAll(`[data-id="6"]`);
    const elements7: NodeListOf<Element> = document.querySelectorAll(`[data-id="7"]`);

    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);
    hoveringElements(elements6);
    hoveringElements(elements7);

    currentLabelHelp = levelsLabelHelp9;
    currentLabel = arrLevelsLabel[8];
    currentLevel = 9;
    isButtonActive = true;
    hideLevelsMenu();
}

export function tenLevel(): void {
    deleteClassActive();
    levelsNum10.addClass('active_lev');
    changeBackround(9);

    title.changeText('Select the flashing elements');
    gameDispay.changeWidth('65%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask10[0][0], arrTask10[0][1], arrTask10[0][2], arrTask10[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask10[1][0], arrTask10[1][1], arrTask10[1][2], arrTask10[1][3]);
    const elem3: IElement = new NewElementForTable(arrTask10[2][0], arrTask10[2][1], arrTask10[2][2], arrTask10[2][3]);
    const elem4: IElement = new NewElementForTable(arrTask10[3][0], arrTask10[3][1], arrTask10[3][2], arrTask10[3][3]);
    const elem5: IElement = new NewElementForTable(arrTask10[4][0], arrTask10[4][1], arrTask10[4][2], arrTask10[4][3]);
    const elem6: IElement = new NewElementForTable(arrTask10[5][0], arrTask10[5][1], arrTask10[5][2], arrTask10[5][3], arrTask10[5][4]);
    const elem7: IElement = new NewElementForTable(arrTask10[6][0], arrTask10[6][1], arrTask10[6][2], arrTask10[6][3]);
    const elem8: IElement = new NewElementForTable(arrTask10[7][0], arrTask10[7][1], arrTask10[7][2], arrTask10[7][3]);

    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    elem3.appendTo(table.returnElement());
    elem4.appendTo(elem3.returnElement());
    elem5.appendTo(table.returnElement());
    elem6.appendTo(table.returnElement());
    elem7.appendTo(table.returnElement());
    elem8.appendTo(table.returnElement());

    const textCode1: IElement = new NewElementPre('div', '', '&lt;div class="table"&gt;\n', '');
    const textCode2: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '1');
    const textCode3: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '2');
    const textCode4: IElement = new NewElementPre('div', '', '   &lt;square&gt;\n', '3');
    const textCode5: IElement = new NewElementPre('div', '', '      &lt;circle class="small"&gt;&lt;/circle&gt;\n', '4');
    const textCode6: IElement = new NewElementPre('div', '', '   &lt;/square&gt;\n', '3');
    const textCode7: IElement = new NewElementPre('div', '', '   &lt;circle&gt;&lt;/circle&gt;\n', '5');
    const textCode8: IElement = new NewElementPre('div', '', '   &lt;circle id="gray"&gt;&lt;/circle&gt;\n', '6');
    const textCode9: IElement = new NewElementPre('div', '', '   &lt;square&gt;&lt;/square&gt;\n', '7');
    const textCode10: IElement = new NewElementPre('div', '', '   &lt;elipse&gt;&lt;/elipse&gt;\n', '8');
    const textCode11: IElement = new NewElementPre('div', '', '&lt;div&gt;\n', '');

    htmlViewerPre.removeСontent();
    textCode1.appendTo(htmlViewerPre.returnElement());
    textCode2.appendTo(htmlViewerPre.returnElement());
    textCode3.appendTo(htmlViewerPre.returnElement());
    textCode4.appendTo(htmlViewerPre.returnElement());
    textCode5.appendTo(htmlViewerPre.returnElement());
    textCode6.appendTo(htmlViewerPre.returnElement());
    textCode7.appendTo(htmlViewerPre.returnElement());
    textCode8.appendTo(htmlViewerPre.returnElement());
    textCode9.appendTo(htmlViewerPre.returnElement());
    textCode10.appendTo(htmlViewerPre.returnElement());
    textCode11.appendTo(htmlViewerPre.returnElement());

    hljs.highlightAll();

    const elements1: NodeListOf<Element> = document.querySelectorAll(`[data-id="1"]`);
    const elements2: NodeListOf<Element> = document.querySelectorAll(`[data-id="2"]`);
    const elements3: NodeListOf<Element> = document.querySelectorAll(`[data-id="3"]`);
    const elements4: NodeListOf<Element> = document.querySelectorAll(`[data-id="4"]`);
    const elements5: NodeListOf<Element> = document.querySelectorAll(`[data-id="5"]`);
    const elements6: NodeListOf<Element> = document.querySelectorAll(`[data-id="6"]`);
    const elements7: NodeListOf<Element> = document.querySelectorAll(`[data-id="7"]`);
    const elements8: NodeListOf<Element> = document.querySelectorAll(`[data-id="8"]`);

    hoveringElements(elements1);
    hoveringElements(elements2);
    hoveringElements(elements3);
    hoveringElements(elements4);
    hoveringElements(elements5);
    hoveringElements(elements6);
    hoveringElements(elements7);
    hoveringElements(elements8);

    currentLabelHelp = levelsLabelHelp10;
    currentLabel = arrLevelsLabel[9];
    currentLevel = 10;
    isButtonActive = true;
    hideLevelsMenu();
}

export function elevenLevel(): void {
    isButtonActive = false;
    gameDispay.changeWidth('30%');
    cssEditorInput.setValue();
    cssEditorInput.addClass('animation_flashing');
    cssEditorInput.setPlaceholder('Type in CSS selector');
    cssEditorInput.changeDisabled('true');
    table.removeСontent();
    const elem1: IElementText = new NewElementWithText('p', 'text_win', 'You did it!');
    const elem2: IElementText = new NewElementWithText('p', 'text_win', 'You rock at CSS');
    const elem3: IElement = new NewElement('p', 'wrapper__text');
    elem3.appendTo(table.returnElement());
    elem1.appendTo(elem3.returnElement());
    elem2.appendTo(elem3.returnElement());
}

export function clicks (e:MouseEvent) {
    if ((e.target as Element).closest(`.${levelsNum1Wrapper.nameClass()}`)) {
        oneLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum2Wrapper.nameClass()}`)) {
        twoLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum3Wrapper.nameClass()}`)) {
        threeLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum4Wrapper.nameClass()}`)) {
        fourLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum5Wrapper.nameClass()}`)) {
        fiveLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum6Wrapper.nameClass()}`)) {
        sixLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum7Wrapper.nameClass()}`)) {
        sevenLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum8Wrapper.nameClass()}`)) {
        eightLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum9Wrapper.nameClass()}`)) {
        nineLevel();
    }
    if ((e.target as Element).closest(`.${levelsNum10Wrapper.nameClass()}`)) {
        tenLevel();
    }

}

document.addEventListener('click', clicks);

function startAnimationInput(): void {
    const text: string = arrAnswers[currentLevel - 1];
    let index = 0;
    function nextLetter(): void {
      if (index < text.length) {
        cssEditorInput.returnInput().value += text.charAt(index);
        index++;
        setTimeout((): void => nextLetter(), 50);
      }
    }
    nextLetter();
}

btnHelp.returnElement().addEventListener('click', clickBtnHelp);

function clickBtnHelp (): void {
    if (isButtonActive) {
        btnHelp.addClass('animation_btn_reset');
        setTimeout((): void => btnHelp.removeClass('animation_btn_reset'), 200);
        hideLevelsMenu();
        const flashingElement = document.querySelectorAll('.anim');
        changeLabelImg();
        currentLabelHelp.removeClass('hidden');
        arrLabelHelp.push(String(currentLevel));
        cssEditorInput.returnInput().value = '';
        cssEditorInput.removeClass('animation_flashing');
        startAnimationInput();
        completeLabel.push(String(currentLevel));
        flashingElement.forEach(element => {
            if(element.classList.contains('anim')) {
                element.classList.remove('anim');
                element.classList.add('animation_win');
            }
        });
        setTimeout((): void => chooseLevel(currentLevel + 1), 1500);
    }
}

btnReset.returnElement().addEventListener('click', clickBtnReset);

function clickBtnReset (): void {
    btnReset.addClass('animation_btn_reset');
    setTimeout((): void => btnReset.removeClass('animation_btn_reset'), 200);
    for (let i = 0; i < arrLevelsLabel.length; i += 1) {
        arrLevelsLabel[i].changeImage('./images/logo/галочка-нефкт.png');
        arrLevelsHelpLabel[i].addClass('hidden');
    }
    oneLevel();
    resetCompleteLabel();
    arrLabelHelp = [];
    localStorage.clear();
}

burgerMenu.returnElement().addEventListener('click', (): void => {
    rightColumn.toggleClass('show__levels__menu');
    burgerMenu.toggleClass('rotated__element');
    burgerMenuWrapper.toggleClass('show__module__window');
})

function hideLevelsMenu(): void {
    rightColumn.removeClass('show__levels__menu');
    burgerMenu.removeClass('rotated__element');
    burgerMenuWrapper.removeClass('show__module__window');
}

export function setLocalStorageLabelHelp() {
    localStorage.setItem('currentLevel', String(currentLevel));
    localStorage.setItem('arrLabelHelp', [...new Set(arrLabelHelp)].join(','));
}
window.addEventListener('beforeunload', setLocalStorageLabelHelp);

export function getLocalStorageLevel() {
    currentLevel = 1;
    if(localStorage.getItem('currentLevel')) {
      currentLevel = Number(localStorage.getItem('currentLevel'));
      changeBackround(Number(localStorage.getItem('currentLevel')) - 1);
      deleteClassActive();
      arrLevelsNum[Number(localStorage.getItem('currentLevel')) - 1].addClass('active_lev');
      arrFunctionLevels[currentLevel - 1]();
    }
    if(localStorage.getItem('arrLabelHelp')) {
      arrLabelHelp = (localStorage.getItem('arrLabelHelp') || '').split(',');
      for (let i = 0; i < arrLabelHelp.length; i += 1) {
        arrLevelsHelpLabel[Number(arrLabelHelp[i]) - 1].removeClass('hidden');
      }
    }
}
window.addEventListener('load', getLocalStorageLevel);
