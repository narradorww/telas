import React, {createContext} from 'react';

const votos = {
  tela1: 0,
  tela2: 0,
  tela3: 0,
  tela4: 0,
  tela5: 0,
};

const GlobalContext = createContext(votos);

export default GlobalContext;
