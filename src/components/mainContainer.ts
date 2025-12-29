import { createDiv, createMain } from '../utils/createTags';

const mainElement = createMain({ parent: document.body });
export const mainContainer = createDiv({ classes: ['container'], parent: mainElement });
