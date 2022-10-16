import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
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

const titulo = {
    fontWeight: '800',
};



function PagLogin() {
    return (
        <>
            <h1 style={titulo}>Contador de Horas</h1>
            <div id='conteudoinicial' style={{display:'flex', justifyContent:'center', paddingBottom:'30px'}}>
                <form style={{margin:'30px'}}>
                    <div >
                        <label>Usuário:</label>
                        <input className='login' type="text" required></input>
                    </div>

                    <div>
                        <label>Senha:</label>
                        <input className='login'  type="password" required></input>
                    </div>
                    <a href='./src/App.tsx'  style={{margin:'15px'}}>
                        <input type="submit" value="Entrar" className='botaoentrar' style={{marginTop:'40px'}}></input>
                    </a>
                </form>
            </div>
        </>
    )
}


export default PagLogin;