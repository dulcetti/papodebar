---
title: "BeerMapper - como as cervejas se relacionam"
date: 2013-06-04
categories:
  - "tecnologia"
tags:
  - "aplicativo"
  - "app"
  - "beermapper"
  - "cerveja"
  - "cerveja-artesanal"
  - "cervejas"
  - "cervejas-artesanais"
  - "como-cervejas-se-relacionam"
  - "ratebeer"
coverImage: "beermap.jpg"
---

Sabe o que me dá tesão de escrever aqui no Papo de Bar? É poder sempre pesquisar e estudar os mais variados assuntos, para esclarecer as dúvidas e entender como as coisas funcionam.

Desde pequeno sempre foi assim, já quebrei muita coisa pra ver como era por dentro e entender como elas funcionavam. E adoro trazer os mais variados campos da ciência pro bar... Matemática, física, biologia, química...

Mas vamos deixar de lenga lenga e falar sobre o

## BeerMapper

![beermapper](images/beermap-600x323.jpg)

Bom, pra falar do BeerMapper, vou começar pelo seu idealizador, o [Kevin Jamieson](http://homepages.cae.wisc.edu/~jamieson/me/About_Me.html).

Kevin é um estudante de Ph.D. da universidade de Wisconsin. Parte do campo de estudo dele, é unir o conhecimento humano, com a alta capacidade computacional disponível nos tempos de hoje.

O insight que ele teve para colocar em prática o que vinha estudando foi o seguinte: Ele foi a um bar e bebeu uma das melhores cervejas de sua vida, mas não conseguia se lembrar de qual era no dia seguinte. Voltou ao bar e disse ao atendente todas as caracteristicas que ele se lembrava, conseguindo reduzir de um total de 40 cervejas daquele tipo, para 6. A partir daí, foi só experimentar as 6 e encontrar a sua cerveja.

## Algorítmos e Cerveja

Vamos lá que a agora a porra tá ficando séria, filhotes de _Hippocampus erectus_!

O nosso amigo Kevin, trabalha com uma pesquisa que podemos chamar de classificação ativa, que se foca em responder a perguntas de formas comparativas. Algo mais ou menos assim: Nós humanos falamos essa cor é "verde", ou essa cor é "amarela". Ele usa o algorítmo dele para comparar 2 cores e dizer se uma é mais verde do que a outra. E fazendo comparações em sequência, ele consegue chegar na mais "verde" das cores.

E ele aplicou essa pesquisa, em cerveja. Ele utilizou o banco de dados do [ratebeer.com](http://www.ratebeer.com/) com mais de 10 mil cervejas e fez uma medida de cada característica das cervejas baseado no peso em que cada uma delas tem em relação ao todo, utilizando o sistema de TF-IDF (Freqüência do Termo - Freqüência Inversa do Documento). Falando assim é complicado, mas veja como uma análise dessas se parece:

\[caption id="attachment_12787" align="aligncenter" width="600"\]![beermapper](images/peso-palavras.jpg) Agora sim, tô começando a entender...\[/caption\]

Depois de criar uma representação de palavras para as cervejas, o passo seguinte é encontrar as 100 cervejas mais próximas de cada cerveja de acordo com um [algoritimo de distância euclidiana](http://pt.wikipedia.org/wiki/Dist%C3%A2ncia_euclidiana).

## A comparação

\[caption id="attachment_12788" align="aligncenter" width="600"\]![beermapper](images/comparacao-de-cervejas.jpg) Ô dúvida cruel...\[/caption\]

Depois disso o sistema de Kevin começa a te perguntar, entre duas cervejas, qual você mais gosta.

Após algumas respostas, o BeerMapper já consegue mapear para você qual o tipo de cerveja que você gosta e ainda sugerir qual outras que você não conhece que tem características muito semelhantes.

Seria como detalhar o "Genoma das Cervejas"

## Extraindo os dados

Com esse tipo de análise, chegamos a dados como esses:

\[caption id="attachment_12792" align="aligncenter" width="600"\]![beermapper](images/amargor1.jpg) O amargor dos tipos de cerveja, quanto mais escuro mais amarga\[/caption\]

\[caption id="attachment_12791" align="aligncenter" width="600"\]![beermapper](images/malte.jpg) O malte por tipo, as mais maltadas são as mais escuras\[/caption\]

\[caption id="attachment_12790" align="aligncenter" width="600"\]![beermapper](images/cor.jpg) As cores das cervejas por tipo\[/caption\]

\[caption id="attachment_12793" align="aligncenter" width="600"\]![beermapper](images/preferidas.jpg) E como não podia faltar, as cervejas que você mais gosta\[/caption\]



## Finalizando

Um porém, é que o BeerMapper ainda não está nas lojas de aplicativos, nem da Apple, nem do Google. Segundo Kevin o aplicativo está 97% pronto, mas ainda faltam alguns ajustes de usabilidade da interface, para tornar tudo mais intuitivo e menos confuso para os usuários finais.

Eu não sei vocês, mas cada vez que eu vejo uma prova de conceito como essa que executa de forma tão graciosa a captação de um conjunto amplo de informações, como são as características de uma cerveja e exibi-la de forma tão detalhada e qualitativa para um usuário, eu fico embasbacado e maravilhado com o poder que temos de utilizar o conhecimento a nosso favor.

O que vocês acham?

Fonte: [Brainstorm#9](http://www.brainstorm9.com.br/37529/mobile/o-universo-da-cerveja-mapeado/#comentarios)
