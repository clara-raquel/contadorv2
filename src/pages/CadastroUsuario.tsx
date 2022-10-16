import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Pages.css';
import iconeExcluir from './src/assets/iconeexcluir.jpg';
import iconeEditar from './src/assets/iconeeditar.png';

const titulo = {
    fontWeight: '800',
};

function CadastroUsuarios() {
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
                    <h3>Cadastro Usuário</h3>
                </div>
                <div>
                    <div className='cadastro'>
                        <label>Nome Usuário:</label>
                        <input type="text" id="nome" />
                    </div>
                    <div className='cadastro'>
                        <label>E-mail:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className='cadastro'>
                        <label>Senha:</label>
                        <input type="text" id="senha" />
                    </div>
                </div>

                <div>
                    <div>
                        <a href='./src/App.tsx'>
                            <input type="submit" value="Cadastro Usuário" className='botaorelatorio' id='botaocadastrar'></input>
                        </a>
                    </div>
                    <div>
                        <div>
                            <div>
                                <h3>Usuários Cadastrados</h3>
                            </div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">Senha</th>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="RelatorioGeral" className='caminho'>Clara</a></td>
                                        <td>clara@email.com</td>
                                        <td>123456</td>
                                        <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='./src/assets/iconeeditar.png' alt='editar'></img></button></td>
                                        <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='./src/assets/iconeexcluir.jpg' alt='excluir'></img></button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="RelatorioGeral" className='caminho'>Raquel</a></td>
                                        <td>raquel@email.com</td>
                                        <td>123456</td>
                                        <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='iconeeditar.png' alt='editar'></img></button></td>
                                        <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='iconeexcluir.jpg' alt='excluir'></img></button></td>
                                    </tr>
                                    <tr>
                                        <td><a href="RelatorioGeral" className='caminho'>Sidicleyshon</a></td>
                                        <td>sidinho@email.com</td>
                                        <td>123456</td>
                                        <td><button className='iconeeditar' type="submit"><img className='iconeeditar' src='iconeeditar.png' alt='editar'></img></button></td>
                                        <td><button className='iconeexcluir' type="submit"><img className='iconeexcluir' src='iconeexcluir.jpg' alt='excluir'></img></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CadastroUsuarios;