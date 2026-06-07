# Front-end Móvel

O desenvolvimento do front-end móvel tem como objetivo disponibilizar uma interface prática e acessível para que os usuários possam interagir com a plataforma de e-commerce utilizando dispositivos Android e iOS. Como o projeto tem foco em escalabilidade, a aplicação móvel foi concebida para atuar como uma camada cliente desacoplada da infraestrutura principal, consumindo os serviços disponibilizados pelas APIs do sistema.

A proposta é oferecer uma experiência de navegação simples e intuitiva, permitindo que o usuário realize desde a consulta de produtos até a finalização de compras de forma rápida e segura. Além disso, a aplicação busca manter um bom desempenho mesmo diante do crescimento da plataforma, aproveitando a arquitetura distribuída definida nas demais etapas do projeto.

## Projeto da Interface

A interface móvel foi projetada seguindo a abordagem Mobile First, considerando que grande parte dos usuários de e-commerce utiliza smartphones para realizar pesquisas e compras online.
O fluxo principal da aplicação foi estruturado para minimizar a quantidade de interações necessárias para a conclusão de uma compra, priorizando rapidez e simplicidade.
As principais telas previstas são:

- Tela de Login e Cadastro: Permite que novos usuários realizem cadastro na plataforma e que usuários existentes efetuem autenticação segura.

- Tela Inicial (Home): Apresenta produtos em destaque, promoções e categorias disponíveis para navegação.

- Tela de Catálogo: Exibe os produtos disponíveis com recursos de pesquisa, filtros e ordenação.

- Tela de Detalhes do Produto: Disponibiliza imagens, descrição, preço, avaliações e informações de estoque.

- Tela de Lista de Desejos: Permite ao usuário salvar produtos de interesse para futuras compras.

- Tela de Carrinho: Responsável pelo gerenciamento dos produtos selecionados antes da finalização da compra.

- Tela de Checkout: Realiza o processamento das informações necessárias para conclusão do pedido.

- Tela de Perfil: Permite a atualização dos dados cadastrais e visualização do histórico de pedidos.

A navegação entre telas é realizada por meio do React Navigation, proporcionando uma experiência fluida e intuitiva para o usuário.

### Wireframes

[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual

O design visual foi concebido para transmitir modernidade, confiabilidade e simplicidade.

- Paleta de Cores

    Azul Escuro (#1E3A8A) – Cor principal da marca.

    Azul Claro (#3B82F6) – Destaques e elementos interativos.

    Branco (#FFFFFF) – Fundo principal.

    Cinza Claro (#F3F4F6) – Áreas secundárias.

    Verde (#22C55E) – Confirmações e sucesso.

    Vermelho (#EF4444) – Alertas e erros.

- Tipografia

    Foi escolhida uma tipografia sem serifa devido à sua boa legibilidade em dispositivos móveis.

    Títulos: Roboto Bold
  
    Conteúdo: Roboto Regular
- Ícones

    Os ícones serão fornecidos pela biblioteca Expo Vector Icons, oferecendo consistência visual e compatibilidade com Android e iOS.

- Diretrizes de Design
  
    Interface limpa e intuitiva;
  
    Botões com área de toque ampliada;
  
    Navegação simplificada;
  
    Layout responsivo;
  
    Prioridade para experiência mobile.

## Fluxo de Dados

A aplicação segue uma arquitetura cliente-servidor baseada em APIs REST.

- Fluxo de Autenticação:

Usuário

   ↓
   
Aplicativo Mobile

   ↓
   
API de Autenticação

   ↓
   
  JWT

   ↓
   
Armazenamento Seguro

   ↓
   
Acesso ao Sistema



- Fluxo de Compra:

Usuário

   ↓
   
Aplicativo Mobile

   ↓
   
API de Produtos

   ↓
   
Carrinho

   ↓
   
API de Pedidos

   ↓
   
Banco de Dados

   ↓
   
Confirmação da Compra


A comunicação entre o aplicativo e os serviços distribuídos ocorre por meio de requisições HTTPS.
## Tecnologias Utilizadas

Com base na implementação atual do projeto, serão utilizadas as seguintes tecnologias:

- Front-end Mobile:
  
    React Native,
  
    Expo SDK
  
    JavaScript,
  
- Navegação:
  
    React Navigation
  
    Native Stack Navigation
  
- Comunicação com APIs:

    Axios
  
- Persistência Local:
  
    Async Storage
  
- Segurança:
  
    JWT Decode
  
    Tokens JWT
  
- Interface:
  
    React Native Paper
  
    Expo Vector Icons
  
- Controle de Estado:
  
    React Hooks

## Considerações de Segurança

Por se tratar de uma aplicação de comércio eletrônico, a segurança é um requisito fundamental.

As principais medidas previstas são:

- Autenticação:
  
    Login utilizando credenciais protegidas.
  
    Utilização de tokens JWT.
  
    Renovação controlada de sessão.
  
- Autorização:
  
    Controle de acesso baseado em perfis.
  
    Separação entre permissões de usuários e administradores.
  
- Proteção de Dados:
  
    Comunicação utilizando HTTPS.
  
    Criptografia de dados sensíveis.
  
    Adequação à LGPD.
  
- Proteção Contra Ataques:
  
    Validação de entradas do usuário.
  
    Prevenção contra ataques de força bruta.
  
    Proteção contra injeções e vulnerabilidades listadas pela OWASP.
  
- Armazenamento Seguro:
  
    Tokens armazenados utilizando Async Storage.
  
    Controle de expiração de sessão.

## Implantação

A implantação da aplicação será realizada em ambiente de nuvem, garantindo escalabilidade e disponibilidade.

- Requisitos de Hardware:
  
    - Ambiente de Desenvolvimento
      
        Processador Quad-Core ou superior;
      
        8 GB de RAM;
      
        10 GB livres em disco.
      
    - Ambiente de Produção
      
        Instância Cloud com mínimo de:
      
          2 vCPUs;
      
          4 GB RAM;
      
          50 GB SSD;
      
          Balanceador de carga;
      
          Banco de dados gerenciado.
      
  - Requisitos de Software:
    
      - Servidor
        
          Linux Ubuntu Server 24.04 LTS
        
          Node.js 22+
        
          Nginx
        
          Docker
        
      - Banco de Dados
        
          PostgreSQL
        
      - Aplicação Mobile
   
          Android 10+
        
          iOS 15+
        
  - Plataforma de Hospedagem:

      Foi escolhida a plataforma Microsoft Azure devido à sua escalabilidade, disponibilidade global e integração com aplicações distribuídas.

  - Configuração do Ambiente:
    
      1.Instalação do Node.js.
    
      2.Configuração das variáveis de ambiente.

      3.Configuração do banco de dados.
    
      4.Configuração dos serviços de API.
    
      5.Configuração de HTTPS.
    
  - Processo de Deploy:
    
      1.Publicação do código no GitHub.
    
      2.Integração contínua utilizando pipelines.

      3.Build automatizado.
    
      4.Publicação dos serviços no Azure.
    
      5.Disponibilização da API para o aplicativo móvel.
    
  - Testes Pós-Implantação

      Após a implantação serão realizados:

        Testes funcionais;
    
        Testes de integração;
    
        Testes de carga;
    
        Testes de segurança;
    
        Testes de usabilidade.

Esses procedimentos garantirão que a aplicação esteja operando corretamente em ambiente de produção e seja capaz de suportar os requisitos de desempenho definidos pelo projeto.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

EXPO. Expo Documentation. Disponível em: https://docs.expo.dev. Acesso em: 07 jun. 2026.

REACT NATIVE. React Native Documentation. Disponível em: https://reactnative.dev. Acesso em: 07 jun. 2026.

REACT NAVIGATION. Documentation. Disponível em: https://reactnavigation.org. Acesso em: 07 jun. 2026.

OWASP FOUNDATION. OWASP Top 10. Disponível em: https://owasp.org. Acesso em: 07 jun. 2026.

MICROSOFT. Azure Documentation. Disponível em: https://learn.microsoft.com/azure. Acesso em: 07 jun. 2026.

O projeto utiliza arquitetura desacoplada (headless commerce), comunicação por APIs e foco em escalabilidade para suportar crescimento e picos de acesso.
