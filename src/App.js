import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TabelaItem from './TabelaItem';

//cria a função useState para receber os dados da API
function App() {
  const [app, setApp] = useState(null);
  //cria a função useEffect para pegar os dados da API
  useEffect(() => {
    axios.get('https://api.publicapis.org/entries').then((response) => {
      setApp(response.data.entries);
    });
  }, []);

  /* verifica se a constante app é nula, e mostra a mensagem
  "Carregando dados..." até que a constante seja preenchida */
  if (app === null) {
    return <p>Carregando dados...</p>;
  }

  return (
    <>
      <h1 className="titulo">Lista de APPs Públicos</h1>
      <table className="format-tabela">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Nome do APP</th>
            <th>Descrição</th>
            <th>Link</th>
          </tr>
        </thead>

        <tbody>
          {/* mapeia a constante app que recebeu os dados da API e carrega nos td's os itens (campos) selecionados */}
          {app.map((item) => (
            <TabelaItem
              categoria={item.Category}
              key={item.Link} //é necessário definir uma chave única (key) para cada item da lista
              nome={item.API}
              descricao={item.Description}
              link={item.Link}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
