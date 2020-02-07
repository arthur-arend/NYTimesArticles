# NYTimes Article Aggregator

O projeto foi publicado utilizando a ferramenta Zeit ele pode ser acessado em:

https://nytimesarticles.now.sh/

## Configurando Projeto

Após baixar o projeto do repositório do Git rode o comando `npm install` na pasta do projeto para garantir que as dependências sejam instaladas corretamente.

## Rodar o Projeto

Rode o projeto com o comando `ng serve --open` isso deve garantir que seu navegador abra automaticamente com a página da aplicação. 

Na página do aplicaçãoapareceram listados os artigos, cada card contém um artigo que foi retornado da API, para ver os detalhes de cada artigo é só clicar no card que você deseja e um modal aparecerá contendo os detalhes e um link para a publicação original do artigo.

## Projeto

Todo o layout do projeto foi feito usando a biblioteca 'Angular Material', dessa forma podemos manter um padrão de componentes e uma responsividade adequada para visualização no mobile. 

Os componentes foram separados em lista de artigos, o modal e a barra superior, como é uma aplicação simples e usei o 'Angular Material' achei desnecessário a componentização em um nível mais baixo.

## Pirâmide de Testes

Com base na pirâmide de testes, que é um "guia" para definir a quantidade dos testes a serem executados. Na base da pirâmede temos os testes unitários, que são testes desde testes de componentes a testes de funções, ao criar o projeto com a ferramenta Angular CLI ela já nos dinsponibiliza alguns testes unitários automáticamente. No centro temos os testes de integração, que são testes de comunicação com APIs ou com duas funcionalidades distintas da sua aplicação. E no topo temos os testes de ponta a ponta, geralmente são realizados com o projeto publicado em um ambiente controlado, realizei esse tipo de teste em outros projetos usando a ferramenta Selenium Web Driver, que permite automatizar esse tipo de teste. 


