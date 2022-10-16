import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Pages.css';
import iconeEditar from './src/assets/iconeeditar.png';
import iconeExcluir from './src/assets/iconeexcluir.jpg';



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



function Landing() {
  return (
    <>
      <Navbar style={{ backgroundColor: '#58943E' }} expand="lg" className='navbar'>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Usuário" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={titulo} >Contador de Horas</h1>

      <div className='botoes'>
        <div><input type="submit" value="Iniciar" style={botao}></input></div>
        <div><input type="submit" value="Parar" style={botao}></input></div>
      </div>
      <div className='crono'>
        <p className='tempo'>
          <span className='horas'>00</span>:<span className='minutos'>00</span>:<span className='segundos'>00</span>
        </p>
      </div>
      <div className='col py-3' id="conteudo" >
        <h3>Horas trabalhadas hoje</h3>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Início</th>
              <th scope="col">Término</th>
              <th scope="col">Tempo</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/10/2022</td>
              <td>12:00:00</td>
              <td>18:00:00</td>
              <td>06:00:00</td>
              <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='../assets/images/iconeexcluir.jpg' alt="excluir"></img></button></td>
            </tr>
            <tr>
              <td>08/10/2022</td>
              <td>12:00:00</td>
              <td>18:00:00</td>
              <td>06:00:00</td>
              <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='../assets/images/iconeexcluir.jpg' alt="excluir"></img></button></td>
            </tr>
            <tr>
              <td>08/10/2022</td>
              <td>12:00:00</td>
              <td>18:00:00</td>
              <td>06:00:00</td>
              <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='../assets/images/iconeexcluir.jpg' alt="excluir"></img></button></td>
            </tr>
          </tbody>
        </table>
        <div className='inferior'>
          <div className='infesquerdo'>
            <h3>Tempo Total Acumulado Hoje:</h3>
            <div className='tempototal'>
              06:00:00
            </div>
          </div>
          <div >
            <a href='./src/RelatorioIndividual.tsx'>
              <input type="submit" value="Relatório de Horas" className='botaorelatorio'></input>
            </a>
          </div>
        </div>
      </div>

    </>
  )
}



export default Landing;
