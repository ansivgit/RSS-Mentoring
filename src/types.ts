export type AppState = {
  _currentImage: number | undefined;
  _subscribers: {
    imageNumber: Set<(value: number | undefined) => void>,
  };

  getImageNumber: () => number | undefined;
  setImageNumber: (value: number | undefined) => number | undefined;
  subscribe:
    (
      type: keyof AppState['_subscribers'],
      callback: SubscribeCallback<CallbackValue>,
    ) => () => void;
  resetState: () => AppState;
}

export type SubscribeCallback<T> = (value: T) => void;
export type CallbackValue = number | undefined;


export type Options<K extends keyof HTMLElementTagNameMap> = {
  tag: K;
  parent?: HTMLElement;
  children?: HTMLElement[];
  classes?: string[];
  events?: Record<string, (event: Event) => void>;
  attributes?: Record<string, string>;
  text?: string;
};
