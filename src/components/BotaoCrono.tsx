import React from 'react';
import './Pages.css';


const botao = {
    width: '200px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '30px',
    backgroundColor: '#88E660',
    border: '3px solid #43AD15',
    fontWeight: '700',
  };


  const BotaoCrono = () => {
    return (
        <div><input type="submit" style={botao}></input></div>
    )
  }

  export default BotaoCrono;

