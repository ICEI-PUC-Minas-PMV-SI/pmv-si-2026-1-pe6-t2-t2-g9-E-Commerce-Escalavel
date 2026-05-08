# Front-end Web

[Inclua uma breve descrição do projeto e seus objetivos.]

## Projeto da Interface Web

[Descreva o projeto da interface Web da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

### Wireframes

[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual

[Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]

## Fluxo de Dados

O fluxo de dados da aplicação ocorre de forma distribuída entre cliente, API e banco de dados, garantindo organização e escalabilidade no processamento das informações.

O usuário acessa a plataforma através da interface web e realiza operações como cadastro, login, consulta de produtos, adição de favoritos, realização de compras e avaliações de produtos.

A interface envia requisições HTTP para a API REST desenvolvida em ASP.NET, responsável por processar as regras de negócio e intermediar a comunicação com o banco de dados SQL Server.

O fluxo ocorre da seguinte forma:

1. Autenticação de Usuário
O usuário envia seus dados de login para a API, que valida as credenciais e retorna um token JWT para autenticação nas próximas requisições.

2. Consulta de Produtos
A API consulta a tabela de produtos no banco de dados e retorna as informações para exibição na interface.

3. Lista de Favoritos
Quando o usuário adiciona um produto aos favoritos, a API cria um relacionamento entre usuário e produto, armazenando essa informação na tabela de favoritos.

4. Processo de Compra
Ao finalizar uma compra, a API cria um pedido na tabela Orders e registra os produtos adquiridos na tabela OrderItems.

5. Avaliação de Produtos
Após uma compra, o usuário pode registrar uma avaliação vinculada ao produto e ao seu usuário.

## Tecnologias Utilizadas
As principais tecnologias utilizadas no desenvolvimento do projeto são:
- Backend

    ASP.NET Core Web API: Responsável pelo desenvolvimento da API REST e implementação das regras de negócio.
  
    Entity Framework Core: ORM utilizado para comunicação entre a aplicação e o banco de dados.
  
    JWT (JSON Web Token): Utilizado para autenticação e controle de acesso.

- Banco de Dados

    SQL Server: Banco de dados relacional utilizado para armazenamento das informações.

- Frontend

    HTML5: Estrutura da interface.

    CSS3: Estilização visual.

    JavaScript: Interatividade e consumo da API.

    Bootstrap 5: Framework para responsividade e padronização visual.

- Ferramentas de Desenvolvimento

    Visual Studio 2022: Ambiente de desenvolvimento principal.

    Git: Versionamento de código.

    GitHub: Armazenamento e colaboração no código-fonte.

    Insomnia: Testes dos endpoints da API.

- Hospedagem

    AWS (Amazon Web Services): Hospedagem da aplicação em ambiente de produção.

## Considerações de Segurança

- Autenticação

  O sistema utiliza autenticação baseada em JWT (JSON Web Token), garantindo que apenas usuários autenticados possam acessar recursos protegidos.

  O token é gerado após login e enviado nas requisições subsequentes.

- Autorização

  O sistema possui níveis de acesso diferentes:

    Administrador

      Gestão de produtos
      Controle de estoque
      Relatórios

  Usuário

      Favoritos
      Compras
      Avaliações

  Esse controle é feito com base no perfil do usuário.

- Proteção de Dados

  Os dados pessoais dos usuários são armazenados conforme princípios da LGPD, garantindo:

    rastreabilidade
    controle de alteração
    ativação/desativação de contas
    Proteção contra ataques

  Foram consideradas boas práticas da OWASP:

    validação de entrada de dados
    autenticação protegida por token
    restrição de endpoints administrativos
    uso de HTTPS
    proteção contra exposição de dados sensíveis
    Segurança de Banco de Dados

  O acesso ao banco é realizado apenas pela API, impedindo acesso direto do cliente.

  As relações entre tabelas utilizam chaves estrangeiras para manter integridade referencial.
## Implantação

A implantação da aplicação será realizada em ambiente de nuvem utilizando AWS.

- Requisitos de Hardware

    Servidor mínimo:

      2 vCPUs
      4GB RAM
      50GB SSD
      conexão estável com internet

    Banco de dados:

      SQL Server
      armazenamento inicial de 20GB
- Requisitos de Software

    Sistema Operacional:

        Windows Server ou Linux

    Dependências:

        .NET 8 Runtime
        SQL Server
        IIS ou servidor equivalente
        Git
- Plataforma de Hospedagem

  A plataforma escolhida foi a Amazon Web Services, devido aos benefícios de:

      escalabilidade
      alta disponibilidade
      segurança
      facilidade de monitoramento

  Serviços utilizados:

      EC2 (hospedagem da API)
      RDS (banco de dados)
      S3 (armazenamento de imagens de produtos)
- Configuração do Ambiente

  Passos:

      Configurar servidor EC2
      Instalar .NET Runtime
      Configurar SQL Server ou RDS
      Configurar variáveis de ambiente
      Configurar connection string
      Configurar HTTPS
      Publicar API

  Variáveis necessárias:

      ConnectionStrings__DefaultConnection
      Jwt__Key
      Environment
- Deploy da Aplicação

  O processo de deploy ocorre da seguinte forma:

      Publicar o projeto no Visual Studio
      Gerar arquivos de publicação
      Enviar arquivos para servidor AWS
      Configurar serviço da aplicação
      Configurar domínio e SSL
      Validar endpoints
- Testes em Produção

  Após implantação, devem ser realizados:

      testes de login
      testes de cadastro
      testes de compra
      testes de favoritos
      testes de avaliações
      testes de carga
      testes de segurança

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
