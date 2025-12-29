import type { Options } from '../types';

export const createElement =
  <K extends keyof HTMLElementTagNameMap>(options: Options<K>): HTMLElementTagNameMap[K] => {
    const {
      tag, parent, children = [], classes = [], events = {}, attributes = {}, text = '',
    } = options;

    const element = document.createElement(tag);

    if (classes.length > 0) {
      element.classList.add(...classes);
    }

    if (children.length > 0) {
      element.append(...children);
    }

    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }

    for (const [eventName, callback] of Object.entries(events)) {
      element.addEventListener(eventName, callback);
    }

    if (text) {
      element.textContent = text;
    }

    if (parent) {
      parent.append(element);
    }

    return element;
  };
