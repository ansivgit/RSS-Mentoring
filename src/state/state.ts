import type { AppState, CallbackValue, SubscribeCallback } from '../types';

const initState = {
  currentImage: undefined,
};

export const State: AppState = {
  _currentImage: initState.currentImage,
  _subscribers: {
    imageNumber: new Set<(value: unknown) => void>(),
  },

  getImageNumber(): AppState['_currentImage'] {
    return this._currentImage;
  },

  setImageNumber(value: number | undefined): AppState['_currentImage'] {
    this._currentImage = value;
    this._subscribers.imageNumber.forEach((sub) => { sub(value); });
    return this._currentImage;
  },

  subscribe(type: keyof AppState['_subscribers'], callback: SubscribeCallback<CallbackValue>): () => void {
    this._subscribers[type].add(callback);
    return () => this._subscribers[type].delete(callback);
  },

  resetState(): AppState {
    return {
      ...this,
      _currentImage: initState.currentImage,
    };
  },
};
