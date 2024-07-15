# Cadastro de Usuários

Aplicação web com implementação de CRUD para gerir usuários.

## Tecnologias e bibliotecas utilizadas

- React e Typescript
- Material UI 
- React Router Dom
- Axios

## Funções da Aplicação

### Adicionar Usuário
Clique no botão "Adicionar usuário" para abrir o modal de adição. Preencha os campos e clique em "Salvar" para adicionar o usuário.

### Editar Usuário
Clique no ícone de edição em qualquer card de usuário para abrir o modal de edição. Faça as alterações necessárias e clique em "Salvar" para atualizar o usuário.

### Excluir Usuário
Clique no botão de exclusão no card de qualquer usuário para removê-lo

### Visualizar Detalhes do Usuário
Clique em qualquer card de usuário para ser redirecionado para uma página com mais detalhes sobre o usuário, incluindo nome, email, senha e nível de acesso.

### Realizar Login

Após criado um ou mais usuários será possivel realizar login na tela inicial, que irá solicita Email e Senha.

## Observação

Como não há opção de cadastro na tela inicial, antes que possa realizar um login é necessario que primeiramente acesse a rota "/bolsistas" na URL para adcionar um novo usuário, após criado é possivel retornar para página inicial e assim realizar o login com os dados do usuario que foram criados.
