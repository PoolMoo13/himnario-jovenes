import {
  GET_HYMN
} from '../types';

export default ( state, action ) => {
  switch( action.type ) {
    case GET_HYMN:
      return {
        ...state,
        hymnSelected: action.payload
      }
    default:
      return state
  }
};
