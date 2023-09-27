import { IElement } from "../../types/types";
import { NewElementForTable, arrTask1 } from "../levels/levels";
import { NewElement, leftColumn } from "../title/title";
import './table.css'

export class NewElementWithTooltip extends NewElement  {
    constructor(tagName: string, nameClass: string, text: string) {
    super(tagName, nameClass);
    this.element.setAttribute('data-tooltip', text)
  }
}

export const gameDispay: IElement = new NewElement('div', 'game_display');
export const table: IElement = new NewElement('div', 'table');
const tableSide: IElement = new NewElement('div', 'table_side');

export function createTable (): void {
    gameDispay.appendTo(leftColumn.returnElement());
    table.appendTo(gameDispay.returnElement());
    table.removeСontent();
    const elem1: IElement = new NewElementForTable(arrTask1[0][0], arrTask1[0][1], arrTask1[0][2], arrTask1[0][3]);
    const elem2: IElement = new NewElementForTable(arrTask1[1][0], arrTask1[1][1], arrTask1[1][2], arrTask1[1][3]);
    elem1.appendTo(table.returnElement());
    elem2.appendTo(table.returnElement());
    tableSide.appendTo(gameDispay.returnElement());
}
