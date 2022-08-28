import React, { createContext } from 'react';
import HymnsState from './HymnsContext/HymnsState';

const GeneralContext = createContext();

const { Consumer, Provider } = GeneralContext;

export function GeneralProvider({ children }) {
  return (
    <Provider>
      <HymnsState>
        { children }
      </HymnsState>
    </Provider>
  )
};
