import image_0 from '../assets/image_0.svg';
import image_1 from '../assets/image_1.svg';
import image_2 from '../assets/image_2.svg';
import image_3 from '../assets/image_3.svg';
import { State } from '../state/state';
import { createDiv, createImg } from '../utils/createTags';

import type { AppState } from '../types';

const getImage = (index: number): string => {
  const images = [image_0, image_1, image_2, image_3];

  const image: string = index < images.length ? images[index] : image_0;
  return image;
};

export const createBoard = (): HTMLElement => {
  const state: AppState = State;
  const container: HTMLElement = createDiv({ classes: ['img-container'] });
  let imageIndex: number | undefined = state.getImageNumber();

  let image: HTMLElement | undefined = undefined;

  const drawImage = (imageIndex: number | undefined): HTMLElement | undefined => {
    if (imageIndex !== undefined) {
      const currentImage = getImage(imageIndex);

      image = createImg({
        classes: ['image'],
        attributes: {
          width: '300',
          height: '300',
          src: currentImage,
          alt: 'Sloth Mascot',
        },
      });

      return image;
    }
    image = undefined;
    return;
  };

  drawImage(imageIndex);

  state.subscribe('imageNumber', (value: number | undefined): void => {
    imageIndex = value;
    drawImage(imageIndex);

    if (image) {
      container.replaceChildren(image);
    } else {
      container.replaceChildren();
    }
  });

  return container;
};
