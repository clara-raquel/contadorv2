import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Pages.css';
import iconeExcluir from './src/images/iconeexcluir.jpg';
import iconeEditar from './src/images/iconeeditar.png';

const titulo = {
    fontWeight: '800',
};

function RelatorioGeral() {
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
            <h1 style={titulo}>Contador de Horas</h1>
            <div className='col py-3' id='conteudo' >
                <div>
                    <div className='linhaum'>
                        <h3>Relatório Individual de Horas</h3>
                        <select className='selecionar' id='mesano'>
                            <option>Outubro/2022</option>
                            <option>Setembro/2022</option>
                            <option>Agosto/2022</option>
                            <option>Julho/2022</option>
                        </select>
                        <select className='selecionar' id='mesano'>
                            <option>Clara</option>
                            <option>Raquel</option>
                            <option>José</option>
                            <option>Pedro</option>
                        </select>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope="col">Data</th>
                                <th scope="col">Início</th>
                                <th scope="col">Término</th>
                                <th scope="col">Tempo</th>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>08/10/2022</td>
                                <td>12:00:00</td>
                                <td>18:00:00</td>
                                <td>06:00:00</td>
                                <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='iconeeditar.png' alt='editar'></img></button></td>
                                <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='iconeexcluir.jpg' alt='excluir'></img></button></td>
                            </tr>
                            <tr>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='iconeeditar.png' alt='editar'></img></button></td>
                                <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='iconeexcluir.jpg' alt='excluir'></img></button></td>
                            </tr>
                            <tr>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td>&nbsp</td>
                                <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='iconeeditar.png' alt='editar'></img></button></td>
                                <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='iconeexcluir.jpg' alt='excluir'></img></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='inferior'>
                    <div className='infesquerdo'>
                        <h3>Tempo Total Acumulado</h3>
                        <div className='tempototal'>
                            06:00:00
                        </div>
                    </div>
                    <div >
                        <a href='./src/App.tsx'>
                            <input type="submit" value="Cadastro Usuário" className='botaorelatorio'></input>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RelatorioGeral;