import React from 'react';

export const initialState = {
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
};

export default React.createContext({
  ...initialState,
});
