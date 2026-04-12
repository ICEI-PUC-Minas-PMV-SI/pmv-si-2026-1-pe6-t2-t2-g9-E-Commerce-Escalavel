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
A modelagem da aplicação é composta pelas entidades Usuário, Carrinho, Itens do Carrinho, Produto, Compra e Itens Comprados.
A entidade Usuário armazena os dados necessários para identificação e autenticação dos clientes, estando diretamente relacionada às compras realizadas no sistema. A entidade Produto representa os jogos disponíveis no catálogo, permitindo sua visualização e comercialização pelos usuários.
A entidade Carrinho representa o carrinho de compras, no qual o usuário pode adicionar produtos antes de finalizar a compra. A entidade Itens do Carrinho representa os produtos adicionados ao carrinho, incluindo suas respectivas quantidades.
A entidade Compra armazena as informações referentes à finalização da compra, como o usuário responsável, a data da compra e o valor total. Já a entidade Itens Comprados representa os produtos efetivamente adquiridos em cada compra, incluindo dados como preço e quantidade de cada item no momento da transação.

### Representações Visuais
O Diagrama Entidade-Relacionamento (DER) apresenta graficamente as entidades, seus atributos e relacionamentos, facilitando a compreensão da estrutura de dados da aplicação. Essa representação visual serve como base para a implementação do banco de dados relacional e auxilia na manutenção e evolução do sistema.

<img width="1858" height="1024" alt="Representacoes Visuais" src="https://github.com/user-attachments/assets/30efd303-f071-4192-a2fa-3c1bc6b80601" />

## Tecnologias Utilizadas

Neste projeto, foram selecionadas tecnologias consolidadas e amplamente utilizadas no mercado, visando desempenho, confiabilidade e facilidade de manutenção.
Para o desenvolvimento da API e das regras de negócio será utilizada a plataforma ASP.NET, responsável pelo processamento das requisições e pela comunicação entre o cliente e o servidor. A interface do usuário será construída com HTML5, CSS3 e JavaScript, utilizando o framework Bootstrap 5 para garantir responsividade e melhor experiência em diferentes dispositivos.
A persistência dos dados será realizada por meio do banco de dados MySQL, utilizando a linguagem SQL para consultas e manipulação das informações. O ambiente de desenvolvimento adotado será o Visual Studio 2022, que oferece recursos completos para codificação e testes. O controle de versão e o gerenciamento do código-fonte serão realizados com Git, utilizando o GitHub como repositório central do projeto.

## API Endpoints

Esta seção descreve os principais endpoints da API REST da plataforma de e-commerce de jogos em mídia física. Os endpoints foram definidos com base nas entidades e funcionalidades do sistema, permitindo a comunicação entre o frontend e o backend. Os exemplos apresentados contemplam operações essenciais para navegação, compra, avaliação e personalização da experiência do usuário.

### Endpoint 1: Consultar Usuários
Método: GET

URL: /api/Usuarios

Descrição: Retorna a lista de todos os usuários cadastrados no sistema.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Usuários listados com sucesso",
}
```
Erro (4XX, 5XX)
```
{ "message": "Erro ao listar usuários", }
```

### Endpoint 2: Consulta Usuário Pelo Id
Método: GET

URL: /api/Usuarios/{id}

Descrição: Busca os detalhes de um usuário específico através do seu ID.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Usuário encontrado",
}
```

### Endpoint 3: Cria Usuário
Método: POST

URL: /api/Usuarios

Corpo (JSON):

JSON
{
  "nome": "string",
  "email": "string",
  "password": "string",
  "perfil": int
}

Resposta:

Sucesso (201 Created)
```
{
  "message": "Usuário criado com sucesso",
}
```

### Endpoint 4: Autenticação
Método: POST

URL: /api/Usuarios/authenticate

Corpo (JSON):

JSON
{
  "email": "string",
  "password": "string"
}

Resposta:

Sucesso (200 OK)
```
{
    "jwtToken": "{token}"
}
```

### Endpoint 5: Alterar Usuário
Método: PUT

URL: /api/Usuarios/{id}

Corpo (JSON):

JSON
{
  "nome": "string",
  "email": "string",
  "password": "string",
  "perfil": int
}

Resposta:

Sucesso (204 No Content)

### Endpoint 6: Desativa Usuário
Método: DELETE

URL: /api/Usuarios/{id}

Descrição: Remove ou desativa um usuário do sistema pelo ID.

Resposta:

Sucesso (204 No Content)

### Endpoint 7: Consultar Produto
Método: GET

URL: /api/Estoque

Descrição: Retorna a lista de produtos disponíveis no estoque.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Produtos listados com sucesso",
}
```
Erro (4XX, 5XX)
```
{ "message": "Erro ao listar produtos", }
```

### Endpoint 8: Consultar Produto Pelo Id
Método: GET

URL: /api/Estoque/{id}

Resposta:

Sucesso (200 OK)
```
{
  "message": "Produto encontrado",
}
```

### Endpoint 9: Cria Produto
Método: POST

URL: /api/Estoque

Corpo (JSON):

JSON
{
  "nome": "string",
  "descricao": "string",
  "preco": decimal,
  "quantEstoque": decimal,
  "imagem": "img/Imagem.png"
}

Resposta:

Sucesso (201 Created)
```
{
  "message": "Produto criado com sucesso",
}
```

### Endpoint 10: Altera Produto
Método: PUT

URL: /api/Estoque/{id}

Corpo (JSON):

JSON
{
  "nome": "string",
  "descricao": "string",
  "preco": decimal,
  "quantEstoque": decimal,
  "imagem": "img/Imagem.png"
}

Resposta:

Sucesso (204 No Content)

### Endpoint 11: Desativa Produto
Método: DELETE

URL: /api/Estoque/{id}

Resposta:

Sucesso (204 No Content)

### Endpoint 12: Consultar Carrinho
Método: GET

URL: /api/Carrinho

Descrição: Lista os itens atualmente no carrinho do usuário autenticado.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Produtos listados com sucesso",
}
```
Erro (4XX, 5XX)
```
{ "message": "Erro ao listar produtos", }
```

### Endpoint 13: Consultar Carrinho Pelo ID
Método: GET

URL: /api/Carrinho/{id}

Resposta:

Sucesso (200 OK)
```
{
  "message": "Produto encontrado",
}
```

### Endpoint 14: Adicionar Item ao Carrinho
Método: POST

URL: /api/Carrinho

Corpo (JSON):

JSON
{
  "idProduto": "int",
  "quantidade": "decimal"
}

Resposta:

Sucesso (201 Created)
```
{
  "message": "Produto adicionado com sucesso",
}
```

### Endpoint 15: Altera Item do Carrinho
Método: PATCH

URL: /api/Carrinho/{id}

Corpo (Raw): 1 (Representando a nova quantidade).

Resposta:

Sucesso (204 No Content)

### Endpoint 16: Remover Item do Carrinho
Método: DELETE

URL: /api/Carrinho/{id}

Resposta:

Sucesso (204 No Content)

### Endpoint 17: Realizar Compra
Método: POST

URL: /api/Compra

Descrição: Finaliza o pedido com os itens presentes no carrinho.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Compra realizada com sucesso",
}
```

### Endpoint 18: Consultar Compras
Método: GET

URL: /api/Compra

Descrição: Retorna a lista de todas as compras do sistema.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Compras listadas com sucesso",
}
```
Erro (4XX, 5XX)
```
{ "message": "Erro ao listar Compras", }
```

### Endpoint 19: Consultar Compra Pelo Id
Método: GET

URL: /api/Compra/{id}

Descrição: Lista o histórico de compras do usuário.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Compras listadas com sucesso",
}
```

### Endpoint 20: Relatório Item Mais Vendido
Método: GET

URL: /api/admin/reports/sales

Descrição: Gera um relatório estatístico dos produtos com maior volume de vendas.

Resposta:

Sucesso (200 OK)
```
{
  "message": "Relatorio exibido com sucesso",
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

### 1. Estratégia de Teste

A estratégia de testes do projeto foi estruturada para garantir a qualidade, confiabilidade e desempenho da aplicação em diferentes níveis. Foram aplicados testes unitários com o framework xUnit, com o objetivo de validar individualmente as regras de negócio e o comportamento das funções principais do sistema, assegurando que cada componente funcionasse de forma isolada e correta.

Além disso, foram realizados testes funcionais utilizando o Postman, permitindo a verificação dos endpoints da API em diferentes cenários de uso. Esses testes foram fundamentais para garantir que as requisições e respostas estivessem de acordo com os requisitos definidos, cobrindo casos de sucesso e de erro.

Por fim, para avaliar o desempenho da aplicação sob diferentes níveis de acesso simultâneo, foram realizados testes de carga com o Apache JMeter, simulando múltiplos usuários e analisando o comportamento do sistema sob estresse. Essa etapa permitiu identificar possíveis gargalos e garantir a estabilidade da aplicação em situações de alta demanda.

### 2. Casos de Teste

Cadastro de usuário
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Cadastro válido | Dados corretos | Usuário criado |
| Email duplicado | Mesmo email | Erro |

<img width="1090" height="850" alt="Captura de tela 2026-04-11 224443" src="https://github.com/user-attachments/assets/024a5d06-4742-4a0a-9c34-f6714bf908e0" />
<img width="1090" height="624" alt="Captura de tela 2026-04-11 224633" src="https://github.com/user-attachments/assets/109bd6e5-ef8f-4a35-abf8-dc253b3a99c6" />

Login
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Login válido | Dados corretos | Sucesso |
| Senha errada | Senha incorreta | Erro |

<img width="1089" height="723" alt="Captura de tela 2026-04-11 224740" src="https://github.com/user-attachments/assets/c23a3089-6e41-4262-9be8-3483c05f10e7" />
<img width="1086" height="629" alt="Captura de tela 2026-04-11 224807" src="https://github.com/user-attachments/assets/73a58fa7-e465-4e30-9845-bc1ed20c3d57" />

Atualização
| Caso | Resultado esperado |
| :---: | :---: |
| Atualizar dados | Dados atualizados |

<img width="1089" height="636" alt="Captura de tela 2026-04-11 225057" src="https://github.com/user-attachments/assets/77ae0771-47fc-4ec5-9dc6-718266e58294" />

Desativação
| Caso | Resultado esperado |
| :---: | :---: |
| Desativar conta | Conta desativada |

<img width="1084" height="635" alt="Captura de tela 2026-04-11 225239" src="https://github.com/user-attachments/assets/417de5e4-3e8d-49d5-8a63-d60ca44ee1eb" />

Adição de Produto
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Adição de Produto com dados válidos | Dados corretos do Produto | Produto Adicionado |
| Produto existente | Mesmo nome | Erro |

<img width="1080" height="877" alt="Captura de tela 2026-04-11 232737" src="https://github.com/user-attachments/assets/ff9d9007-f238-4ee5-bb03-559f8134c2e7" />
<img width="1085" height="649" alt="Captura de tela 2026-04-11 233354" src="https://github.com/user-attachments/assets/7c7276a1-c889-4ae8-be00-65efd844c470" />

Consulta Produtos Adicionados
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta Produtos | Todos os produtos exibidos |

<img width="1091" height="890" alt="Captura de tela 2026-04-11 233537" src="https://github.com/user-attachments/assets/05b9a260-eb3f-44e1-8183-686dd4ee4fb4" />

Consulta Dados de um Produto
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta informações de um determinado produto | Dados do produto exibidos |

<img width="1083" height="887" alt="Captura de tela 2026-04-11 233517" src="https://github.com/user-attachments/assets/57a58a55-aa5f-448c-a41b-c8ae47474cc5" />

Atualização de Produto
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Estoque alterado | Quantidade de produtos no estoque alterada | Produto atualizado |

<img width="1096" height="630" alt="Captura de tela 2026-04-11 233745" src="https://github.com/user-attachments/assets/56b3ff18-f8d0-459d-8f02-22cc6e125d1a" />

Desativação de Produto
| Caso | Resultado esperado |
| :---: | :---: |
| Desativar Produto | Produto desativado |

<img width="1092" height="638" alt="Captura de tela 2026-04-11 233813" src="https://github.com/user-attachments/assets/4343d0db-b019-4c0b-b3da-c1147fd24944" />

Adicionar Produto no Carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Adição de Produto no Carrinho | Produto e quantidade selecionados |Produto adicionado |

<img width="1082" height="881" alt="Captura de tela 2026-04-11 234226" src="https://github.com/user-attachments/assets/e86ef169-32bd-4bbc-ac1a-39d8ab81d850" />

Consultar Carrinho
| Caso | Resultado esperado |
| :---: | :---: |
| Consulta todos os produtos no carrinho | Todos os produtos no carrinho exibidos |

<img width="1089" height="872" alt="Captura de tela 2026-04-11 234311" src="https://github.com/user-attachments/assets/e7b2b7d4-999e-4d5b-aeef-82269d07cd95" />

Alterar quantidade de produtos no carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Alterar carrinho | Quantidade de produtos no carrinho alterada | Carrinho atualizado |

<img width="1092" height="621" alt="Captura de tela 2026-04-11 234457" src="https://github.com/user-attachments/assets/a0239992-0ac5-472e-8b37-9cd86e5bfea9" />

Remover produtos do carrinho
| Caso | Entrada | Resultado esperado |
| :---: | :---: | :---: |
| Remover produtos do carrinho | Produto para ser removido selecionado | Produto Removido |

<img width="1085" height="612" alt="Captura de tela 2026-04-11 234738" src="https://github.com/user-attachments/assets/ad096b59-e926-47ec-a86e-6d8c389e4c21" />

Realizar Compra
| Caso | Resultado esperado |
| :---: | :---: |
| Confirmar Compra | Compra realizada |

<img width="1082" height="692" alt="Captura de tela 2026-04-11 235546" src="https://github.com/user-attachments/assets/777cac47-9686-4626-9016-a2cb7d5285e1" />

Gerar Relatório de Vendas
| Caso | Resultado esperado |
| :---: | :---: |
| Solicitação de Relatório | Relatório exibido com total de vendas e produto mais vendido |

<img width="1085" height="810" alt="Captura de tela 2026-04-10 173035" src="https://github.com/user-attachments/assets/04278ddd-a22e-40be-939b-5d94eb27b5e0" />

### 3. Testes Unitários

Ferramenta: xUnit

| Teste | Descrição | Resultado |
| :---: | :---: | :---: |
| Email_Deve_Conter_Arroba | Valida formato básico de email | Aprovado |
| Calcular_Total_Compra | Verifica cálculo de total | Aprovado |
| Nome_Deve_Ser_Valido | Verifica se o nome é valido | Aprovado |
		
<img width="1044" height="377" alt="Captura de tela 2026-04-12 174224" src="https://github.com/user-attachments/assets/5e1a3b5d-2efe-4be5-bcd8-450fad5c4c91" />

### 4. Testes de Carga

#### Login de usuários

Endpoint: /api/Usuarios/authenticate<br>
Método: POST

Configuração:<br>
50 usuários simultâneos<br>
Ramp-up: 10 segundos

Resultado esperado:<br>
Sistema deve responder sem erros<br>
Tempo de resposta aceitável

Resultado obtido:
<img width="1429" height="911" alt="Captura de tela 2026-04-10 213206" src="https://github.com/user-attachments/assets/649d106c-6f26-4b70-91ae-6362ecf150a5" />
<img width="1424" height="876" alt="Captura de tela 2026-04-10 212937" src="https://github.com/user-attachments/assets/245c8e8d-fbd6-45b4-9489-e59c04a453be" />

#### Finalizar compra

Endpoint: /api/Compra<br>
Método: POST

Configuração:<br>
50 usuários simultâneos<br>
Ramp-up: 20 segundos

Resultado esperado:<br>
Sistema deve responder sem erros<br>
Tempo de resposta aceitável

Resultado obtido:
<img width="1431" height="913" alt="Captura de tela 2026-04-12 162902" src="https://github.com/user-attachments/assets/08a75e76-1f01-4235-888d-1321b10b7a5e" />
<img width="1437" height="328" alt="Captura de tela 2026-04-12 162920" src="https://github.com/user-attachments/assets/1b14950c-f1e1-4994-91ac-c6610627a19a" />

#### Relatório de vendas

Endpoint: /api/admin/reports/sales<br>
Método: GET

Configuração:<br>
50 usuários simultâneos

Resultado esperado:<br>
Sistema deve responder sem erros<br>
Tempo de resposta aceitável

Resultado obtido:
<img width="1433" height="909" alt="Captura de tela 2026-04-10 214057" src="https://github.com/user-attachments/assets/fd1ad4ac-f131-42ef-9989-32bdf04dc7da" />
<img width="1426" height="867" alt="Captura de tela 2026-04-10 184206" src="https://github.com/user-attachments/assets/45a47a96-9064-48fc-930d-d2c628e0933f" />

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
