import { createLeftColumn, createTitleAndBtnHelp } from './components/title/title'
import { createTable } from './components/table/table';
import { createEditor } from './components/editor/editor';
import { createFooter } from './components/footer/footer';
import { createLevels, createRightColumn } from './components/levels/levels';
import './normalize.css'

createLeftColumn();
createTitleAndBtnHelp()
createTable();
createEditor();
createFooter();
createRightColumn();
createLevels();
