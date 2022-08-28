import React, { useReducer } from 'react';
import hymnsContext from './hymnsContext';
import hymnsReducer from './hymnsReducer';
import { GET_HYMN } from '../types';
import hymns from '../../hymns-json/hymns'

const HymnsState = props => {
  const initialState = {
    hymns: hymns,
    hymnSelected: {}
  };

  const [state, dispatch] = useReducer( hymnsReducer, initialState );

  // GET Hymn
  const getHymn = hymnId => {
    const hymnSelected = state.hymns.find( hymn => hymn.id === Number(hymnId) );
    dispatch({
      type: GET_HYMN,
      payload: hymnSelected
    })
  };

  return <hymnsContext.Provider
    value={{
      hymns: state.hymns,
      hymnSelected: state.hymnSelected,
      getHymn
    }}
  >
    { props.children }
  </hymnsContext.Provider>
};

export default HymnsState;

