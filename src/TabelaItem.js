import React from 'react';

/*função que cria o componente com o objeto (tr) com seus respectivos (td's)
para a tabela já usando a desestruração*/
function TabelaItem({ categoria, nome, descricao, link }) {
  return (
    <tr>
      <td>{categoria}</td>
      <td>{nome}</td>
      <td>{descricao}</td>
      <td>
        <a href={link}>{link}</a>
      </td>
    </tr>
  );
}

export default TabelaItem;
