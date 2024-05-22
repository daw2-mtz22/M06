import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);

    return (
        <GlobalContext.Provider value={{ historias, setHistorias }}>
            {children}
        </GlobalContext.Provider>
    );
};
