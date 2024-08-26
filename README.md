# Weekly Meal Planner

Este é um aplicativo de Plano de Refeições Semanais desenvolvido com Angular no front-end, destinado a ajudar os usuários a organizar suas refeições semanais de maneira eficiente. O aplicativo permite criar, visualizar, atualizar e remover planos de refeições, facilitando o planejamento alimentar.

## Em produção

Para ver a aplicação rodando em tempo real, pode clicar [Aqui](https://meal-planner-front-hazel.vercel.app/meals)

## Funcionalidades

- **Adicionar Refeições**: Crie novas refeições especificando o dia da semana, tipo de refeição (café da manhã, almoço, jantar, etc.), receitas/alimentos, quantidade de porções e notas adicionais.
- **Filtrar Refeições**: Filtre as refeições existentes por dia da semana ou tipo de refeição para facilitar a visualização e o gerenciamento.
- **Editar Refeições**: Atualize as informações de uma refeição existente.
- **Deletar Refeições**: Remova refeições com a opção de confirmação através de um popup modal.
- **Notas Limitadas**: As notas inseridas são limitadas em caracteres e tratadas para se ajustarem ao layout do card.

## Tecnologias Utilizadas

- **Angular**: Framework JavaScript usado para construir o front-end da aplicação.
- **HTML5 e CSS3**: Linguagens de marcação e estilo para estruturar e estilizar a interface do usuário.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript, utilizada em conjunto com Angular.
- **Node.js** (back-end): Utilizado no desenvolvimento do back-end da aplicação, juntamente com TypeScript e SQLite como banco de dados.
  
## Layout Responsivo

O aplicativo foi desenvolvido com um layout responsivo, garantindo uma boa experiência em dispositivos móveis e desktops. O design dos cards e do modal de confirmação se ajusta ao tamanho da tela para assegurar uma interface limpa e funcional.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para rodar o projeto (Front-end)

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Ivan-Vidal/meal-planner-front.git
   cd meal-planner

   ```

2. **Instale as dependências:**

    ```bash 
    npm install
    # ou
    yarn install
    
    ```
3. **Execute o servidor de desenvolvimento:**

   ```bash 
    ng serve

    ```

4. **Acesse o aplicativo:**

Abra o navegador e acesse http://localhost:4200/.


5. **Contribuição:**

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver sugestões de melhorias, sinta-se à vontade para abrir issues ou enviar pull requests.

6. **Licença**
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.