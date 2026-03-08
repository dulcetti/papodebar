---
title: "Um pouco de cervejas, drinks e microprocessadores"
date: 2012-11-27
categories:
  - "destaque"
  - "tecnologia"
tags:
  - "arduino"
  - "beber-com-facebook"
  - "beber-com-twitter"
  - "cerveja"
  - "facebook"
  - "raspberry-pi"
  - "robofun"
  - "robofun-create"
  - "teclado-de-cerveja"
  - "teclado-de-latas-de-cerveja"
  - "tecnologiatag"
  - "twitter"
coverImage: "latas-de-cerveja-e-arduino.jpg"
---

E mais uma vez, estamos de volta num post coletivo. [Drunk McLoving](http://www.papodebar.com/author/lincoln/ "Drunk McLoving") e [Comsmopolitan Girl](http://www.papodebar.com/author/carol/ "Cosmopolitan Girl"), uma dupla afiada em cerveja e tecnologia. Então, deixemos as frivolidades de lado e vamos logo ao que interessa!

<!--more-->

## RoboFun Create - Esbanjando inovação...

![Teclado feito com latas de cerveja](images/teclado-cerveja.jpg "Teclado feito com latas de cerveja")

A [RoboFun Create](http://robofun.ro/create/ "RoboFun Create") é um braço da [RoboFun](http://robofun.ro/ "RoboFun"), a maior loja de hardware open-source da Romênia. Os caras gostam de tecnologia e de fazer protótipos de ideias loucas que chegam para eles. É mais ou menos assim, você tem uma loja, liga pros caras e pede uma ação inovadora, envolvendo tecnologia, para engajar os seus clientes. Pronto, o resto é com eles.

E uma dessas ações foi com...

## ...44 latas de cerveja e uma placa Arduino

Vamos deixar vocês se deleitarem um pouco, e depois explicamos o que, e porque isso aconteceu ;)

http://www.youtube.com/watch?v=nKYGhnDunJM

Essa maravilha que você assistiu, é uma combinação de 44 latas de cerveja, uma placa controladora [Arduino](http://www.arduino.cc/ "Arduino") e um mini computador [Raspberry PI](http://www.raspberrypi.org/faqs "Raspberry PI").

Os caras da RoboFun create, receberam um pedido da [Staropramen](http://www.staropramen.com/en "Staropramen"), uma cervejaria de Praga, para construírem algo inovador para um concurso cultural, que aconteceu no [Webstock](http://www.webstock.ro/ "Webstock") 2012, Bucareste.

### Qual foi o resultado?

Essa belezura de teclado interativo e um engajamento fantástico dos usuários com a campanha.

Só que os caras não param por aí...

## Já pensou em encher a cara com o Facebook ou o Twitter?

Com a Social Drink Machine, você pode!

http://www.youtube.com/watch?v=68-8QC2qU5w

Fuciona da seguinte forma: do lado da máquina tem um [QR Code](http://pt.wikipedia.org/wiki/C%C3%B3digo_QR "QR Code"), que você escaneia e é levado para um app do Facebook que te mostra umas opções de bebida. Quando você clica no que quer beber, aparece outro QR Code, dessa vez no seu aparelho. Aí você mostra isso para uma câmerazinha no Social Drink Machine e _voilá_!

O [bartender robô](http://www.papodebar.com/garcom-robo-seria-a-solucao-dos-problemas-do-mau-atendimento-em-bares/ "Garçom Robô: seria a “solução” dos problemas do mau atendimento em bares?") te atende na hora e prepara seu drink! É só colocar o copo lá e a máquina começa a mandá-lo para lá e para cá, misturando os ingredientes do seu Screw Driver, por exemplo.

Também dá para usar o Twitter para pedir, com o tweet “gimme drinks @socialdrinkbot”. Depois de pronto, você pode até compartilhar com seus amigos ou seguidores o que bebeu. Agora, depois de muitos vídeos e curiosidades, vamos falar um pouco de tecnologia:

## Como essa tranqueira toda funciona?

Vamos lá então... No primeiro caso, as latinhas de cerveja ficam conectadas a uma placa Arduíno (essa placa é muito utilizada para processos de automação, podendo ser acoplada a sensores, motores, lâmpadas e dispositivos que respondem a estímulos externos, como temperatura, toque, pressão).

Cada lata simulava uma letra, num conceito muito parecido com o funcionamento dos _smartphones_ hoje em dia. Um toque na lata, e ela envia um sinal para a placa Arduíno dizendo que aquela respectiva "letra" foi acionada.

\[caption id="" align="aligncenter" width="300"\]![placa arduino na mão de uma pessoa](images/arduino_due_in_hand.jpg "Arduino") Posso pressentir cada movimento seu, jovem padawan\[/caption\]

O mini computador Raspberry PI (mini mesmo, do tamanho de um cartão de crédito), serve para fazer a interface dos sinais recebidos pelo Arduíno com a tela de TV, que fica acima das latinhas. Ele é uma maquininha com um processador do tipo ARM rodando a 700MHz e tem uma central de processamento gráfica, capaz de processar videos na qualidade de BluRay.

\[caption id="attachment_10579" align="aligncenter" width="600"\]![microcomputador raspberry pi, do tamanho de um cartão de crédito](images/raspberry-pi.jpeg "raspberry pi") Do tamanho de um cartão de crédito? E funciona!!\[/caption\]

Créditos: [Switched On Tech Design](http://www.sotechdesign.com.au "Switched On Tech Design")

No segundo exemplo abaixo da mesa onde fica o “robotender”, tem um computador Raspberry PI, que processa o QR Code que você mostrou, e uma placa Arduíno atrás, que controla os motores. Agora que você já sabe tudo de Arduino e Raspberry PI, fica muito fácil de desvendar a mágica ;)

## Finalizando

Gostaríamos de deixar uma pergunta:

> Se você pudesse criar uma máquina, que ligasse bebidas e tecnologia, que máquina você faria?
