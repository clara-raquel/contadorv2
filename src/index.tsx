import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import RelatorioIndividual from './pages/RelatotioIndividual';
import RelatorioGeral from './pages/RelatorioGeral';
import CadastroUsuario from './pages/CadastroUsuario';
import PagLogin from './pages/PagLogin';
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PagLogin />
      <App />
      <CadastroUsuario/>
      <RelatorioGeral />
      <RelatorioIndividual />
    </Provider>
  </React.StrictMode>
);


