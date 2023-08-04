import { createContext } from 'react';

export const initialState = {
  isMobileMenuOpen: false,
  isCVPopupOpen: false,
  setIsMobileMenuOpen: () => {},
  setIsCVPopupOpen: () => {},
};

export default createContext({
  ...initialState,
});
