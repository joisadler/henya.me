import { useMemo, useState } from 'react';
import { node } from 'prop-types';

import Context, { initialState } from './Context';

const GlobalState = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setIsMobileMenuOpen = () => {
    setState(prevState => ({
      ...prevState,
      isMobileMenuOpen: true,
    }));
  };

  const showMobileMenu = () => {
    setState(prevState => ({
      ...prevState,
      isMobileMenuOpen: true,
    }));
  };

  const hideMobileMenu = () => {
    setState(prevState => ({
      ...prevState,
      isMobileMenuOpen: false,
    }));
  };

  const setIsCVPopupOpen = () => {
    setState(prevState => ({
      ...prevState,
      isCVPopupOpen: true,
    }));
  };

  const showCVPopup = () => {
    setState(prevState => ({
      ...prevState,
      isCVPopupOpen: true,
    }));
  };

  const hideCVPopup = () => {
    setState(prevState => ({
      ...prevState,
      isCVPopupOpen: false,
    }));
  };

  const Value = useMemo(
    () => ({
      ...state,
      setIsMobileMenuOpen,
      showMobileMenu,
      hideMobileMenu,
      setIsCVPopupOpen,
      showCVPopup,
      hideCVPopup,
    }),
    [state]
  );

  return <Context.Provider value={Value}>{children}</Context.Provider>;
};

GlobalState.propTypes = {
  children: node.isRequired,
};

export default GlobalState;
