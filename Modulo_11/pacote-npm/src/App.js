// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cadastro from './Components/Cadastro/Cadastro';
import Listagem from './Components/Listagem/Listagem';
import Menu from './Components/Menu/Menu';

function App() {
  const [itens, setItens] = useState([]);

  const adicionarItem = (novoItem) => {
    setItens((prevItens) => [...prevItens, novoItem]);
  };

  const excluirItem = (index) => {
    setItens((prevItens) => prevItens.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cadastro"
          element={<Cadastro adicionarItem={adicionarItem} />}
        />
        <Route
          path="/listagem"
          element={<Listagem listaCadastro={itens} excluirItem={excluirItem} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
