import { createContext } from 'react';

const StateContext = createContext({
  state: 0,
  setState: () => {},
});

export default StateContext;
