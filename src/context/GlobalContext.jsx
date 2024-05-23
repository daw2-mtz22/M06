import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [historias, setHistorias] = useState([]);
    const [dataHistoria, setDataHistoria] = useState({})

    return (
        <GlobalContext.Provider value={{ historias, setHistorias, dataHistoria, setDataHistoria}}>
            {children}
        </GlobalContext.Provider>
    );
};
