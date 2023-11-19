import React from 'react';
import './Listagem.css';

const Listagem = ({ listaCadastro, excluirItem }) => {
  return (
    <div className="listagem-container">
      <h2>Lista de Cadastros</h2>
      {listaCadastro.map((item, index) => (
        <div className="item-card" key={index}>
          <div className="item-info">
            <span className="item-label">Nome:</span> {item.nome}
          </div>
          <div className="item-info">
            <span className="item-label">Email:</span> {item.email}
          </div>
          <div className="item-info">
            <span className="item-label">Senha:</span> {item.senha}
          </div>
          <div className="item-actions">
            <button className="delete-button" onClick={() => excluirItem(index)}>
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listagem;
