const secoes = [
    {
      id: 1,
      titulo: "Cadastro de usuário",
      entradaTexto: [
          {
          id: 1,
          label: "Nome",
          placeholder: "Digite o nome completo!",
          name: "nome"
        },
        {
        id: 2,
        label: "CPF",
        placeholder: "Digite o CPF!",
        name: "cpf"
      },
      {
        id: 3,
        label: "E-mail",
        placeholder: "Digite o e-mail!",
        name: "email"
      },
      {
        id: 4,
        label: "Senha",
        placeholder: "Digite a senha!",
        secureTextEntry: true,
        name: "senha"
      },
      {
        id: 5,
        label: "Confirme sua senha",
        placeholder: "Digite novamente sua senha!",
        secureTextEntry: true,
        name: "confirme sua senha"
      }
      ],
    checkbox: []
    },
    {
      id: 2,
      titulo: "Insira os complementares da unidade",
      entradaTexto: [
          {
          id: 1,
          label: "Volume",
          placeholder: "Digite o volume da unidade!",
      },
      {
          id: 2,
          label: "Área",
          placeholder: "Digite o usuario responsavel da unidade!",
      },
  ],
  checkbox: []
  },
  {
    id: 3,
    titulo: "Indique se a unidade esta ativa ou não",
    EntradaTexto: [],
    checkbox: [
        {
        id: 1,
        value: "Unidade ativa!"
    },
    {
        id: 2,
        value: "Unidade inativa!"
    },
    ]
  }
]
export {secoes}