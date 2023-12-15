import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [isDarkMode,toggleDarkMode] = useState(false);
    
    return (
        <div>
            <DarkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        </div>
    );
}

export {DarkModeProvider,DarkModeContext};