import { createContext } from 'react';

export const initialState = {
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
};

export default createContext({
  ...initialState,
});
