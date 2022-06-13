import { createContext } from 'react';

const ThemeContext = createContext({
  state: 0,
  setState: () => {},
});

export default ThemeContext;
