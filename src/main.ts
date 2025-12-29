import { createBoard } from './components/board';
import { mainContainer } from './components/mainContainer';
import { createPageController } from './components/pageController';
import { CONFIG } from './pageConfig';
import { createP, createH1 } from './utils/createTags';

import './style.css';

export const Main = (): HTMLElement => {
  const title = createH1({ text: CONFIG.title.text, classes: [...CONFIG.title.classes] });
  const text = createP({ text: CONFIG.text.text, classes: [...CONFIG.text.classes] });

  const board = createBoard();
  const pageController = createPageController();

  mainContainer.append(title, text, board, pageController);

  return mainContainer;
};

Main();
