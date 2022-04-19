import React, {createContext} from 'react'


const colors = {
    tela1: '#1abc9c',
    tela2: '#2ecc71',
    tela3: '#3498db',
    tela4: '#9b59b6',
    tela5: '#f1c40f',
}

// interface IColor{
//     tela1: string;
//     tela2: string;
//     tela3: string;
//     tela4: string;
//     tela5: string;  
// } 

 export const ColorContext = createContext(colors);
 function ColorProvider({children}){
     return ( 
     <ColorContext.Provider value={colors}>{children}</ColorContext.Provider>
        );
 }

 export default ColorProvider;
