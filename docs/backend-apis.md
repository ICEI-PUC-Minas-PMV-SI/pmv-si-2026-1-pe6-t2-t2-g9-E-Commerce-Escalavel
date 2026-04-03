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

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```

## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
