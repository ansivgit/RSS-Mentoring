import { createElement } from './createElements';

import type { Options } from '../types';

type ElementOptions = Omit<Options<keyof HTMLElementTagNameMap>, 'tag'>;
type CreateElementFactory = (options: ElementOptions) => HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

const createElementFactory = (tag: keyof HTMLElementTagNameMap): CreateElementFactory => {
  return (options) => {
    return createElement({ tag, ...options });
  };
};

export const createButton = createElementFactory('button');

export const createDiv = createElementFactory('div');

export const createH1 = createElementFactory('h1');

export const createImg = createElementFactory('img');

export const createMain = createElementFactory('main');

export const createP = createElementFactory('p');
