import { Reducer } from 'redux';
import { coreInitial, CoreState } from '../state';
import { CoreAction } from '../actions/types';

const CoreReducer: Reducer<CoreState, CoreAction> = (state: CoreState = coreInitial, action: CoreAction) => {
  switch (action.type) {
    case 'CHANGE_CONTENT':
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};

export default CoreReducer;
