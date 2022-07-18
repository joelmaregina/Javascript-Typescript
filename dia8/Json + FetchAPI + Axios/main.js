fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
  const trT = document.createElement('tr');
  let tdT = document.createElement('td');
  tdT.innerHTML = 'Nome';
  tdT.style.fontWeight = 'Bold';
  trT.appendChild(tdT);

  tdT = document.createElement('td');
  tdT.innerHTML = 'Idade';
  tdT.style.fontWeight = 'Bold';
  trT.appendChild(tdT);

  tdT = document.createElement('td');
  tdT.innerHTML = 'Empresa';
  tdT.style.fontWeight = 'Bold';
  trT.appendChild(tdT);

  tdT = document.createElement('td');
  tdT.innerHTML = 'Salario';
  tdT.style.fontWeight = 'Bold';
  trT.appendChild(tdT);

  table.appendChild(trT);

    for(let pessoa of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
