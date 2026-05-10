# Front-end Web

Este projeto consiste no desenvolvimento do Front-end Web de uma plataforma de e-commerce voltada para a venda de jogos eletrônicos em mídia física, denominada GameStore. A aplicação tem como finalidade oferecer uma experiência de navegação intuitiva, organizada e visualmente atrativa para os usuários finais, permitindo que realizem todo o processo de compra de forma simples e eficiente.

O principal objetivo do projeto de Front-end Web é desenvolver uma interface funcional, intuitiva e visualmente consistente para uma plataforma de e-commerce de jogos eletrônicos, proporcionando uma experiência agradável e eficiente ao usuário. O Front-end foi desenvolvido com foco em usabilidade, organização visual e responsividade, garantindo que a interface seja acessível. A aplicação contempla funcionalidades essenciais de uma loja virtual, como visualização de produtos, detalhes dos jogos, gerenciamento de carrinho de compras, cálculo de valores e finalização da compra.

Além de atender aos usuários finais, o projeto também considera a padronização visual e estrutural da aplicação, facilitando futuras manutenções e evoluções do sistema. Dessa forma, o Front-end atua como a principal camada de interação entre o usuário e o sistema, garantindo uma experiência agradável e funcional.

## Projeto da Interface Web

O projeto da interface Web da aplicação foi desenvolvido a partir de um planejamento prévio realizado no Figma, permitindo a definição do layout, da identidade visual e do fluxo de navegação antes da implementação do sistema. A proposta da interface é oferecer uma experiência clara, intuitiva e organizada, facilitando a interação do usuário com as funcionalidades da plataforma de e-commerce de jogos eletrônicos.

O layout das páginas segue uma estrutura padronizada, composta por cabeçalho, área central de conteúdo e rodapé. O cabeçalho concentra elementos essenciais de navegação, como a logo da aplicação, o campo de busca e o menu de acesso às demais seções, garantindo fácil localização das funcionalidades. A área central é destinada à exibição do conteúdo principal de cada tela, como a listagem de jogos, a visualização detalhada de produtos, o carrinho de compras, a tela de pagamento e as áreas administrativas. O rodapé apresenta informações institucionais, contatos e links complementares, mantendo consistência visual em todas as páginas.

Durante o desenvolvimento do projeto da interface, também foram considerados aspectos como organização da informação, hierarquia visual dos elementos e clareza nas ações disponíveis ao usuário. Esses fatores contribuíram para a criação de uma interface funcional e coerente, capaz de atender tanto usuários finais quanto administradores da plataforma.

#### Index:
<img width="688" height="598" alt="image" src="https://github.com/user-attachments/assets/3fddc56d-7d3c-43dd-bdb9-3f5f7d75f7cd" />

#### Visualizar Produto:
<img width="681" height="596" alt="image" src="https://github.com/user-attachments/assets/c4438be2-cdcb-4812-ac59-88cc1645f1c3" />

#### Carrinho:
<img width="681" height="587" alt="image" src="https://github.com/user-attachments/assets/debf2678-cbb6-4a4d-95ce-9732ce2af69d" />

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

### 1. Estratégia de Teste

A estratégia de testes da aplicação web foi definida com o objetivo de garantir o funcionamento correto da interface, a integração com a API e o desempenho das páginas em diferentes cenários de uso. Para isso, foram realizados casos de teste, testes unitários e testes de carga/performance utilizando ferramentas específicas para o ambiente frontend.

Inicialmente, foram elaborados casos de teste para validar os principais requisitos funcionais da aplicação, verificando o comportamento das telas de login, cadastro, perfil e demais funcionalidades disponíveis para o usuário. Esses testes permitiram garantir que as ações executadas na interface apresentassem os resultados esperados.

Além disso, foram implementados testes unitários utilizando o framework Jest, responsável por validar funções JavaScript do frontend de forma isolada. Os testes verificaram regras simples de funcionamento da aplicação, como validação de login e tratamento de dados inseridos pelo usuário, assegurando maior confiabilidade ao código desenvolvido.

Por fim, foram executados testes de carga e performance utilizando a ferramenta Lighthouse do Google Chrome, permitindo analisar o desempenho das páginas web, tempo de carregamento, responsividade e boas práticas da aplicação. Essa etapa possibilitou avaliar a experiência do usuário e identificar possíveis melhorias relacionadas à performance da interface.

### 2. Casos de Teste

Cadastro de usuário
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Cadastro válido | Dados corretos | Usuário criado |
| Email duplicado | Mesmo email | Erro |

<img width="1911" height="912" alt="Captura de tela 2026-05-08 221003" src="https://github.com/user-attachments/assets/3633a76b-f764-4261-923f-c4d1f46c5ede" />
<img width="1918" height="910" alt="Captura de tela 2026-05-08 221135" src="https://github.com/user-attachments/assets/872335f7-ba5c-4be7-b8f5-9553f4b0ac31" />

Login
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Login válido | Dados corretos | Sucesso |
| Senha errada | Senha incorreta | Erro |

<img width="1912" height="907" alt="Captura de tela 2026-05-08 221348" src="https://github.com/user-attachments/assets/521ad082-587b-4146-8f2c-87b759333c24" />
<img width="1918" height="911" alt="Captura de tela 2026-05-08 221417" src="https://github.com/user-attachments/assets/ca394005-f64a-46e3-af7a-90fa6657db41" />

Atualização
| Caso | Resultado esperado |
| :---: | :---: |
| Atualizar dados | Dados atualizados |

<img width="1901" height="911" alt="Captura de tela 2026-05-08 230857" src="https://github.com/user-attachments/assets/c4b89d59-8fc6-4c64-b1f9-fe9c48ad4c6f" />

Desativação
| Caso | Resultado esperado |
| :---: | :---: |
| Desativar conta | Conta desativada |

<img width="1900" height="912" alt="Captura de tela 2026-05-08 230922" src="https://github.com/user-attachments/assets/b1b5579d-7592-4ea0-bc3f-b4126ad2aba8" />

Adição de Produto
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Adição de Produto com dados válidos | Dados corretos do Produto | Produto Adicionado |
| Produto existente | Mesmo nome | Erro |



Consulta Produtos Adicionados
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta Produtos | Todos os produtos exibidos |



Consulta Dados de um Produto
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta informações de um determinado produto | Dados do produto exibidos |



Atualização de Produto
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Estoque alterado | Quantidade de produtos no estoque alterada | Produto atualizado |



Desativação de Produto
| Caso | Resultado esperado |
| :---: | :---: |
| Desativar Produto | Produto desativado |



Adicionar Produto no Carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Adição de Produto no Carrinho | Produto e quantidade selecionados |Produto adicionado |



Consultar Carrinho
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta todos os produtos no carrinho | Todos os produtos no carrinho exibidos |



Alterar quantidade de produtos no carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Alterar carrinho | Quantidade de produtos no carrinho alterada | Carrinho atualizado |



Remover produtos do carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Remover produtos do carrinho | Produto para ser removido selecionado | Produto Removido |



Realizar Compra
| Caso | Resultado esperado |
| :---: | :---: |
| Confirmar Compra | Compra realizada |



Gerar Relatório de Vendas
| Caso | Resultado esperado |
| :---: | :---: |
| Solicitação de Relatório | Relatório exibido com total de vendas e produto mais vendido |



### 3. Testes Unitários

Ferramenta: Jest

| Teste | Descrição | Resultado |
| :---: | :---: | :---: |
| Login_Valido | Verifica autenticação com credenciais corretas | Aprovado |
| Login_Invalido | Verifica comportamento com credenciais inválidas | Aprovado |
		
<img width="496" height="333" alt="Captura de tela 2026-05-09 192640" src="https://github.com/user-attachments/assets/64a62e81-2d8f-4a06-b6c1-af8aec94e277" />

### 4. Testes de Carga

| Ferramenta | Objetivo | Resultado |
| :---: | :---: | :---: |
| Lighthouse | Avaliar desempenho e otimização das páginas do frontend | Performance 99 |
| Lighthouse | Verificar acessibilidade da interface | Accessibility 66 |
| Lighthouse | Analisar boas práticas de desenvolvimento web | Best Practices 92 |
| Lighthouse | Avaliar otimização para mecanismos de busca | SEO 91 |

<img width="691" height="717" alt="Captura de tela 2026-05-09 201517" src="https://github.com/user-attachments/assets/fbe4b897-b239-4db6-8aaf-97de55a10c05" />

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
