import React, { useState } from "react";
export const ThemeContext=React.createContext();
export const UpdateThemeContext=React.createContext();
export function ThemeProvider({children}){
    const [darktheme,setDarktheme]=useState(false);
    function Toggle(){
    setDarktheme((prev)=>!prev)
    
    }
    return (<ThemeContext.Provider value={darktheme}><UpdateThemeContext.Provider value={Toggle}>{children}</UpdateThemeContext.Provider></ThemeContext.Provider>)
}
