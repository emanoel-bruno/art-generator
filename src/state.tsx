import { ContentType } from './types/core';
import { ListType } from './types/list';

export const mainColor = 'red';

export interface CoreState {
  content: ContentType;
}
export interface ListState {
  list: ListType;
}

export interface AppState {
  core: CoreState;
  list: ListState;
}

// Initial State
export const coreInitial: CoreState = {
  content: 'INPUT_SCREEN',
};

export const listInitial: ListState = {
  list: [],
};

const defaultState: AppState = {
  core: coreInitial,
  list: listInitial,
};

export default defaultState;
