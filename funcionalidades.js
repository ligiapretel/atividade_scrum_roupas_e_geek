// Descrição
// "Nós temos uma loja online de itens da cultura pop/geek e trabalhando vendo-os" - Carlos e Daniel

// Funcionalidades
// 1 - Cadastro de produtos
// No array de produtos, adicione um objeto no final desse array e liste os produtos

var produtos = [{
    nome: "Camiseta Meu Amigo Totoro",
    preco: 59.99,
    tamanho: "G",
    tipo: "vestuario",
    qtd: 120,
  },
  {
    nome: "Poster Star Wars",
    preco: 20.25,
    tipo: "decoração",
    qtd: 1420,
  },
  {
    nome: "Luminaria DC (Limitada)",
    preco: 90.0,
    tipo: "decoração",
    qtd: 100
  },
];

function cadastrarNovoProduto(nome, preco, tipo, qtd) {
  produtos.push({
    nome: nome,
    preco: preco,
    tipo: tipo,
    qtd: qtd
  });
  return produtos;
}

cadastrarNovoProduto("Estante Dijon", 1175.64, "decoração", 64)
console.log(produtos)

// 2- Cadastro de itens exclusivos
// No array de exclusivos, adicione um objeto no final desse array e liste todos os itens

var exclusivos = [{
    nome: "Baralho do Cthulhu",
    dataLancamento: '02/02/2022',
    ehBrinde: false,
    brand: 'Lovecraft'
  },
  {
    nome: "Omnitrix",
    dataLancamento: '07/07/2022',
    ehBrinde: true,
    brand: 'Ben 10'
  },
];

function cadastrarItemExclusivo(nome, dataLancamento, ehBrinde, brand) {
  exclusivos.push({
    nome: nome,
    dataLancamento: dataLancamento,
    ehBrinde: ehBrinde,
    brand: brand
  });
  return exclusivos;
}

cadastrarItemExclusivo('Drone do Mickey', '22/05/2022', true, 'Disney')
console.log(exclusivos)

//Array Clientes para as funcionalidades 3, 4, 5 e 6
var clientes = [{
    id: 1,
    nome: "Rogério Lucas",
    sobrenome: "Silva",
    idade: 30,
    contato: "4002-8922",
  },
  {
    id: 2,
    nome: "Roberto Carlos",
    sobrenome: "Braga",
    idade: 70,
    contato: "(11) 9 1111-1111",
  },
  {
    id: 3,
    nome: "Sylvester",
    sobrenome: "Stallone",
    idade: 80,
    contato: "(22) 9 2222-2222",
  },
];

// 3- Buscar por um cliente
// Pegar id do cliente e retorna o mesmo e caso não exista retorne a mensagem "Cliente não encontrado"
function presenca(idx) {
  const clienteProcurado = clientes.find((valor) => {
    if (valor.id === idx) {
      return true
    }
  })
  if (clienteProcurado) {
    return clienteProcurado
  }
  return 'Cliente não encontrado'
}
console.log(presenca(2))

// 4- Cadastro de cliente
// No array de clientes, adicione um objeto no final desse array e liste os clientes
function cadastrarCliente(nome, sobrenome, idade, contato) {
  let ultimoId = (clientes.length) + 1
  clientes.push({
    id: ultimoId,
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    contato: contato
  });
  return clientes;
}

cadastrarCliente('Jô', 'Soares', 81, '(31) 9 8769-0564')
cadastrarCliente('Amy', 'Winehouse', 30, '(47) 9 5844-3132')

console.log(clientes)

// 5- Listar clientes entre duas idades
// Crie uma função que ao receber a idade inicial e final e em seguida retorne todos os clientes que estão nesse intervalo

// 6- Listar clientes que começam com uma determinada letra
// Crie uma função que receba uma letra e retorne todos os clientes que começam com a mesma letra
function retornarClientesPorLetra(letra) {
  const letraInicialCliente = clientes.filter((cliente) => {
    if (cliente.nome[0] == letra) {
      return true
    }
  })
  return letraInicialCliente
}
console.log(retornarClientesPorLetra('S'))