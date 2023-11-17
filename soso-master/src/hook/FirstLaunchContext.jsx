// FirstLaunchContext.js
import React, { createContext, useState, useContext } from 'react';

export const FirstLaunchContext = createContext({
  isFirstLaunch: true,
  setIsFirstLaunch: () => {},
});

export const FirstLaunchProvider = ({ children }) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  return (
    <FirstLaunchContext.Provider value={{ isFirstLaunch, setIsFirstLaunch }}>
      {children}
    </FirstLaunchContext.Provider>
  );
};

export const useFirstLaunch = () => useContext(FirstLaunchContext);
