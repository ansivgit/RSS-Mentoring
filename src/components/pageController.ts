import { CONFIG } from '../pageConfig';
import { State } from '../state/state';
import { createButton, createDiv } from '../utils/createTags';

import type { AppState } from '../types';

const IMAGES_QUANTITY = 4;

export const createPageController = (): HTMLElement => {
  const state: AppState = State;

  const clearButton = createButton({
    ...CONFIG.buttonClear,
    events: {
      click: () => {
        state.setImageNumber(undefined);
      },
    },
  });

  const previousButton = createButton({
    ...CONFIG.buttonPrev,
    events: {
      click: () => {
        const currentImage: number = state.getImageNumber() ?? 0;
        if (currentImage === 0) {
          state.setImageNumber(0);
          return;
        }
        state.setImageNumber(currentImage - 1);
      },
    },
  });

  const nextButton = createButton({
    ...CONFIG.buttonNext,
    events: {
      click: () => {
        const currentImage: number = state.getImageNumber() ?? 0;

        if (currentImage === IMAGES_QUANTITY) {
          state.setImageNumber(IMAGES_QUANTITY);
          return;
        }
        state.setImageNumber(currentImage + 1);
      },
    },
  });

  const buttonsContainer = createDiv({
    classes: ['btn-container'],
    children: [clearButton, previousButton, nextButton],
  });

  return buttonsContainer;
};
