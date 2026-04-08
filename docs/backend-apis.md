# APIs e Web Services

Este projeto consiste no desenvolvimento de uma plataforma de e-commerce escalável voltada para a venda de jogos eletrônicos em mídia física. A solução será baseada em uma arquitetura distribuída, composta por múltiplos serviços independentes acessados por meio de APIs Web. O sistema tem como foco oferecer uma experiência rápida, segura e estável para usuários finais, bem como ferramentas confiáveis de gestão para administradores da plataforma.
A aplicação permitirá funcionalidades como cadastro e autenticação de usuários, navegação e busca de produtos, gerenciamento de favoritos, realização de compras, avaliação de produtos adquiridos e geração de relatórios administrativos. Toda a comunicação entre os módulos do sistema será realizada através de APIs, possibilitando escalabilidade horizontal, facilidade de manutenção e evolução futura da plataforma.

## Objetivos da API

Este projeto tem como objetivo utilizar uma API Web para viabilizar a comunicação eficiente e padronizada entre os diferentes serviços da plataforma de e-commerce, sustentando uma arquitetura distribuída capaz de oferecer desempenho, escalabilidade e alta disponibilidade. A adoção desse modelo permite a separação entre frontend e backend, promovendo maior flexibilidade no desenvolvimento e manutenção do sistema.
Por meio dessa interface de comunicação, serão disponibilizados os principais recursos da aplicação, como gerenciamento de usuários, produtos, estoque, compras, avaliações e relatórios administrativos. Esse direcionamento contribui para o desacoplamento entre os módulos, facilitando a evolução da plataforma e a reutilização de serviços internos.
Além disso, a utilização de padrões amplamente reconhecidos, tem como finalidade garantir segurança, interoperabilidade e conformidade com a LGPD, preparando o sistema para integração com serviços externos e para o crescimento futuro da solução.


## Modelagem da Aplicação
A modelagem da aplicação foi definida com o objetivo de representar, de forma clara e organizada, as informações necessárias para o funcionamento da plataforma de e-commerce de jogos em mídia física. O modelo de dados adotado segue o paradigma relacional, permitindo a integridade, consistência e facilidade de manutenção das informações, além de atender aos requisitos funcionais do sistema.
A estrutura é composta por entidades que representam os principais elementos do domínio da aplicação, como usuários, produtos, pedidos e interações dos usuários com os produtos, incluindo avaliações e favoritos. Os relacionamentos entre essas entidades foram definidos com base nas regras de negócio identificadas durante a análise do sistema.

### Entidades e Estrutura de Dados
A modelagem da aplicação é composta pelas entidades Usuário, Produto, Pedido, OrderItems, Avaliação e Favorito. A entidade Usuário armazena os dados necessários para identificação e autenticação dos clientes, estando diretamente relacionada às compras, avaliações e favoritos. A entidade Produto representa os jogos disponíveis no catálogo, possibilitando sua comercialização e interação pelos usuários.
A entidade Pedido registra as compras realizadas, associando cada pedido a um único usuário. A relação entre pedidos e produtos é realizada pela entidade OrderItems, que armazena informações como quantidade e preço praticado no momento da compra, garantindo o correto histórico das transações. As entidades Avaliação e Favorito permitem a interação dos usuários com os produtos, registrando feedbacks e itens de interesse, sem interferir diretamente no processo de compra.

### Representações Visuais
O Diagrama Entidade-Relacionamento (DER) apresenta graficamente as entidades, seus atributos e relacionamentos, facilitando a compreensão da estrutura de dados da aplicação. Essa representação visual serve como base para a implementação do banco de dados relacional e auxilia na manutenção e evolução do sistema.

<img width="1536" height="1024" alt="diagrama" src="https://github.com/user-attachments/assets/984217dd-ae68-48e4-bc94-997376a1b35c" />

## Tecnologias Utilizadas

Neste projeto, foram selecionadas tecnologias consolidadas e amplamente utilizadas no mercado, visando desempenho, confiabilidade e facilidade de manutenção.
Para o desenvolvimento da API e das regras de negócio será utilizada a plataforma ASP.NET, responsável pelo processamento das requisições e pela comunicação entre o cliente e o servidor. A interface do usuário será construída com HTML5, CSS3 e JavaScript, utilizando o framework Bootstrap 5 para garantir responsividade e melhor experiência em diferentes dispositivos.
A persistência dos dados será realizada por meio do banco de dados MySQL, utilizando a linguagem SQL para consultas e manipulação das informações. O ambiente de desenvolvimento adotado será o Visual Studio 2022, que oferece recursos completos para codificação e testes. O controle de versão e o gerenciamento do código-fonte serão realizados com Git, utilizando o GitHub como repositório central do projeto.

## API Endpoints

Esta seção descreve os principais endpoints da API REST da plataforma de e-commerce de jogos em mídia física. Os endpoints foram definidos com base nas entidades e funcionalidades do sistema, permitindo a comunicação entre o frontend e o backend. Os exemplos apresentados contemplam operações essenciais para navegação, compra, avaliação e personalização da experiência do usuário.

### Endpoint 1: Listar Produtos
- Método: GET
- URL: /produtos
- Parâmetros:
  - param1: Retorna a lista de jogos disponíveis no catálogo da plataforma.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Produtos listados com sucesso",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao listar produtos",
      "error": {
        ...
      }
    }
    ```

### Endpoint 2: Cadastrar Usuário
- Método: POST
- URL: /usuários
- Parâmetros:
  - param1: Permite o cadastro de um novo usuário na plataforma.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Usuário cadastrado com sucesso",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao cadastrar usuário",
      "error": {
        ...
      }
    }
    ```

### Endpoint 3: Criar Pedido
- Método: POST
- URL: /pedidos
- Parâmetros:
  - param1: Registra uma nova compra realizada por um usuário.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Pedido realizado com sucesso",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao realizar pedido",
      "error": {
        ...
      }
    }
    ```

### Endpoint 4: Avaliar Produto
- Método: POST
- URL: /avaliacoes
- Parâmetros:
  - param1: Permite que um usuário registre uma avaliação para um produto adquirido.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Avaliação registrada com sucesso",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao realizar avaliação",
      "error": {
        ...
      }
    }
    ```

### Endpoint 5: Adicionar Produto aos Favoritos
- Método: POST
- URL: /favoritos
- Parâmetros:
  - param1: Adiciona um produto à lista de favoritos do usuário.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Produto adicionado aos favoritos",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao favoritar produto",
      "error": {
        ...
      }
    }
    ```

### Endpoint 5: Listar Favoritos do Usuário
- Método: POST
- URL: /usuários/favoritos
- Parâmetros:
  - param1: Retorna a lista de produtos favoritados por um usuário.
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Favoritos listados com sucesso",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Erro ao listar favoritos",
      "error": {
        ...
      }
    }
    ```
        
## Considerações de Segurança

A segurança da plataforma de e-commerce é um aspecto essencial, considerando o tratamento de dados pessoais dos usuários e o processamento de operações de compra. Para garantir acesso controlado ao sistema, devem ser adotados mecanismos de autenticação, assegurando que apenas usuários devidamente identificados utilizem as funcionalidades disponíveis, além da aplicação de autorização baseada em perfis para restringir operações administrativas.
A comunicação entre o frontend e a API deve ocorrer por meio de conexões seguras (HTTPS), protegendo os dados transmitidos. Adicionalmente, a validação das informações recebidas e a adoção de boas práticas recomendadas pela OWASP contribuem para a prevenção de ataques comuns, garantindo a integridade do sistema e a conformidade com a Lei Geral de Proteção de Dados (LGPD).

## Implantação

A implantação da aplicação distribuída em ambiente de produção envolve a preparação da infraestrutura necessária para garantir desempenho, disponibilidade e segurança adequados ao funcionamento da plataforma de e-commerce. Para isso, são definidos requisitos de hardware e software, bem como a configuração do ambiente de hospedagem e os procedimentos de deploy.

### Requisitos de hardware e software
Para a execução da aplicação em produção, é necessária uma infraestrutura com recursos compatíveis com a demanda esperada de usuários simultâneos. O ambiente deve contar com servidores capazes de executar a aplicação backend desenvolvida em ASP.NET, bem como o banco de dados MySQL para persistência das informações. O sistema operacional do servidor deve ser compatível com a plataforma .NET e com o servidor de banco de dados adotado.
Do ponto de vista de software, é necessário ter instalado o runtime do .NET, o servidor web responsável por hospedar a aplicação, além do sistema gerenciador de banco de dados MySQL. Também é recomendado o uso de ferramentas de monitoramento e controle de logs para acompanhamento do funcionamento do sistema em produção.

### Plataforma de hospedagem
A aplicação será hospedada em um ambiente de computação em nuvem utilizando a Amazon Web Services (AWS). A escolha dessa plataforma se justifica pela possibilidade de escalabilidade, alta disponibilidade e facilidade de manutenção da infraestrutura. O uso de serviços em nuvem permite ajustar os recursos de acordo com a demanda de acesso, garantindo melhor desempenho mesmo em períodos de pico.

### Configuração do ambiente
A configuração do ambiente de implantação envolve a instalação de todas as dependências necessárias para a execução da aplicação, incluindo o runtime do ASP.NET e o banco de dados MySQL. Além disso, devem ser configuradas variáveis de ambiente responsáveis por informações sensíveis, como dados de conexão com o banco, evitando sua exposição direta no código-fonte.
O banco de dados deve ser criado e estruturado conforme o modelo relacional definido na fase de modelagem, assegurando a correta persistência dos dados de usuários, produtos, pedidos, avaliações e favoritos.

### Deploy da aplicação
Após a configuração do ambiente, o processo de deploy consiste na publicação da aplicação backend no servidor configurado na AWS, disponibilizando a API para acesso externo. O frontend, por sua vez, será integrado à API para consumo das funcionalidades oferecidas pelo sistema. O processo de deploy segue as orientações da plataforma de hospedagem escolhida, garantindo que a aplicação esteja acessível pela internet.

## Testes

Testes manuais

1.1 Cadastro de usuário

Teste 1 — Cadastro válido

Ao tentar cadastrar um usuário
<img width="1746" height="336" alt="Captura de tela 2026-04-08 202820" src="https://github.com/user-attachments/assets/a930f504-858f-424b-8ea2-89888b88a716" />
O cadastro de usuário foi concluído com sucesso
<img width="1761" height="655" alt="Captura de tela 2026-04-08 202910" src="https://github.com/user-attachments/assets/d0eff05f-3404-4860-840a-e2baf4639e0f" />

Teste 2 — Email duplicado

Ao tentar fazer o cadastro novamente com as mesmas informações, o cadastro não é concluído
<img width="1766" height="570" alt="Captura de tela 2026-04-08 202933" src="https://github.com/user-attachments/assets/8ab7af0a-87fd-434e-92f1-f15e9c916152" />

1.2 Login

Teste 3 — Login válido

Ao tentar fazer o login de usuário
<img width="1761" height="306" alt="Captura de tela 2026-04-08 203700" src="https://github.com/user-attachments/assets/6c73f0b2-16d0-4a49-aae9-f20ab3c642cd" />
O login é efetuado
<img width="1759" height="519" alt="Captura de tela 2026-04-08 203721" src="https://github.com/user-attachments/assets/112e5074-465e-426f-bd5f-5f897f7854b4" />

Teste 4 — Senha errada

Ao tentar logar com a senha errada
<img width="1750" height="282" alt="Captura de tela 2026-04-08 204432" src="https://github.com/user-attachments/assets/836b6051-9ba0-4a20-8566-413e1967399f" />
O login não é efetuado
<img width="1760" height="575" alt="Captura de tela 2026-04-08 204449" src="https://github.com/user-attachments/assets/f5e2d5b8-87a7-4ae7-a584-cef8a3695968" />

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
