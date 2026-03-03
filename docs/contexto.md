# Introdução

O crescimento do comércio eletrônico exige sistemas capazes de suportar alta demanda e grande volume de acessos. Para isso, é necessário utilizar arquiteturas que garantam escalabilidade, desempenho e disponibilidade.

Este projeto propõe o desenvolvimento de um e-commerce escalável com base nos conceitos de Arquitetura de Sistemas Distribuídos, buscando estruturar o sistema de forma eficiente, confiável e preparada para expansão.

## Problema
O crescimento do comércio eletrônico tem aumentado significativamente o volume de acessos simultâneos, transações e processamento de dados em plataformas digitais. Em períodos de alta demanda, como promoções e datas comemorativas, muitos sistemas enfrentam problemas de lentidão, indisponibilidade e falhas no processamento de pedidos, impactando diretamente a experiência do usuário e os resultados do negócio.

Além disso, a necessidade de integração com diferentes tecnologias, como sistemas de pagamento, controle de estoque e serviços de entrega, torna o ambiente ainda mais complexo. Nesse contexto, empresas que atuam no comércio eletrônico precisam lidar com desafios relacionados à escalabilidade, desempenho e confiabilidade de seus sistemas.

Diante desse cenário, surge o seguinte questionamento:

Como garantir que um sistema de e-commerce suporte alta demanda e crescimento contínuo sem comprometer desempenho e disponibilidade?

## Objetivos

Aqui você deve descrever os objetivos do trabalho indicando que o objetivo geral é desenvolver um software para solucionar o problema apresentado acima. 

Apresente também alguns (pelo menos 2) objetivos específicos dependendo de onde você vai querer concentrar a sua prática investigativa, ou como você vai aprofundar no seu trabalho.
 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

Descreva a importância ou a motivação para trabalhar com esta aplicação que você escolheu. Indique as razões pelas quais você escolheu seus objetivos específicos ou as razões para aprofundar em certos aspectos do software.

O grupo de trabalho pode fazer uso de questionários, entrevistas e dados estatísticos, que podem ser apresentados, com o objetivo de esclarecer detalhes do problema que será abordado pelo grupo.

> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

1. Descrição do Público-Alvo
1.1 Clientes (Usuários Finais)
Os clientes são usuários que acessam a plataforma com o objetivo de pesquisar produtos, salvar itens de interesse, realizar compras e avaliar produtos adquiridos.
 Características gerais:
  - Faixa etária predominantemente entre 18 e 60 anos;
  - Níveis variados de familiaridade com tecnologia;
  - Utilização majoritária de dispositivos móveis (smartphones), além de desktops;
  - Expectativa de navegação simples, rápida e intuitiva;
  - Baixa tolerância a falhas, lentidão ou indisponibilidade do sistema.
 Conhecimentos prévios e relação com tecnologia:
  - Já utilizam redes sociais, aplicativos bancários e outros e-commerces;
  - Estão habituados a processos digitais rápidos;
  - Esperam segurança no tratamento de dados pessoais e financeiros.
 Relação hierárquica:
  - Não possuem responsabilidade administrativa;
  - Interagem com o sistema apenas como consumidores.
1.2 Administradores da Plataforma
Os administradores são responsáveis pela gestão dos produtos, controle de estoque, acompanhamento de vendas e geração de relatórios.
 Características gerais:
  - Faixa etária média entre 25 e 55 anos;
  - Conhecimento intermediário ou avançado em informática;
  - Utilização predominante de desktop ou notebook;
  - Necessidade de informações organizadas e confiáveis.
 Conhecimentos prévios e relação com tecnologia:
  - Familiaridade com sistemas de gestão (ERP, sistemas administrativos);
  - Capacidade de interpretar relatórios e métricas de vendas;
  - Necessidade de interface funcional e objetiva.
 Relação hierárquica:
  - Possuem permissões ampliadas no sistema;
  - Podem atuar como gestores ou responsáveis pelo setor comercial;
  - Dependem da confiabilidade do sistema para tomada de decisão.

Personas
 Persona 1 – Mariana, a Compradora Digital
  - 27 anos
  - Trabalha em horário comercial
  - Utiliza principalmente smartphone
  - Costuma realizar compras online em datas promocionais
  - Objetivos:
    - Encontrar produtos facilmente;
    - Finalizar compras de forma rápida;
    - Receber confirmação imediata do pedido.
  - Principais dores:
    - Sites lentos ou instáveis;
    - Falhas no pagamento;
    - Perda de produtos salvos no carrinho.

 Persona 2 – Carlos, o Gestor do E-commerce
  - 38 anos
  - Responsável pela loja virtual
  - Utiliza notebook para gerenciamento
  - Acompanha métricas de vendas e desempenho
  - Objetivos:
    - Controlar estoque com precisão;
    - Inserir e atualizar produtos com facilidade;
    - Acessar relatórios claros e objetivos.
  - Principais dores:
    - Falta de atualização automática de estoque;
    - Dificuldade em identificar produtos mais vendidos;
    - Instabilidade do sistema em períodos de pico.
   
Mapa de Stakeholders
Além dos usuários diretos, identificamos outros stakeholders que influenciam ou são impactados pelo sistema:
| Stakeholder               | Interesse no Sistema                     | Nível de Influência |
| ------------------------- | ---------------------------------------- | ------------------- |
| Clientes                  | Experiência rápida, segura e estável     | Alto                |
| Administradores           | Gestão eficiente e relatórios confiáveis | Alto                |
| Equipe de TI              | Manutenção, escalabilidade e segurança   | Alto                |
| Gateways de pagamento     | Integração segura e estável              | Médio               |
| Serviços de entrega       | Integração para envio de pedidos         | Médio               |
| Órgãos reguladores (LGPD) | Conformidade legal e proteção de dados   | Alto                |

# Especificações do Projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001|  Permitir que o usuário e o administrador gerencie seu cadastro (cadastrar, logar, atualizar e desativar conta)  | ALTA | 
|RF-002|  Permitir que o usuário acesse os produtos ofertados  | ALTA |
|RF-003|  Permitir que o usuário salve uma lista de produtos de seu interesse  | BAIXA |
|RF-004|  Permitir que o usuário efetue compra  | MÉDIA |
|RF-005|  Após o usuário realizar uma compra, deve ser possível realizar a avaliação dos produtos comprados  | BAIXA |
|RF-006|  O sistema deve gerenciar a quantidade de produtos em estoque atualizando a quantidade automaticamente após cada venda realizada  | MÉDIA |
|RF-007|  Permitir que o administrador gerencie os produtos à venda (inserir, atualizar, consultar e desativar) | ALTA |
|RF-008|  Gerar relatório para o administrador referente ao resumo de vendas e qual produto obteve maior sucesso de vendas  | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RNF-001| Responsividade para rodar dês de um dispositivos móvel até um monitor ultrawide | MÉDIA | 
|RNF-002| Processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| Assegurar todos os processos evitando fraude ou vazamento de dados |  ALTA | 
|RNF-004| Suportar até 500 usuários simultâneos sem perda de performance |  MÉDIA | 
|RNF-005| Permanecer online durante 97% do tempo a partir do lançamento |  MÉDIA | 
|RNF-006| Fácil manutenção e correção de bugs para que afete o mínimo possivel sua uzabilidade em situações criticas |  ALTA | 
|RNF-007| Comformidade legal com a LGPD e as principais recomendações da OWASP |  ALTA | 
|RNF-008| Assecibilidade para que pessoas com diferentes habilidades tenham facilidade para utilização |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

# Catálogo de Serviços

Descreva aqui todos os serviços que serão disponibilizados pelo seu projeto, detalhando suas características e funcionalidades.

# Arquitetura da Solução

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![arq](https://github.com/user-attachments/assets/b9402e05-8445-47c3-9d47-f11696e38a3d)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.
