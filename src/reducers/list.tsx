import { Reducer } from 'redux';
import { listInitial, ListState } from '../state';
import { ListAction } from '../actions/types';

const ListReducer: Reducer<ListState, ListAction> = (state: ListState = listInitial, action: ListAction) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {
        ...state,
        list: [action.element].concat(state.list),
      };
    case 'REMOVE_ELEMENT':
      state.list.splice(action.position);
      return state;
    default:
      return state;
  }
};

export default ListReducer;
