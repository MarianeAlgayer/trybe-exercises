/* 

1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

  Código síncrono: AS funções são executadas como se estivessem em uma fila. Assim, a primeira função lida é a primeira a ser executada. Quando sua execução termina, ela "entrega seu retorno", permitindo que o mesmo processo ocorra com a próxima função da fila.

  Código assíncrono: Quando o javascript lê uma função assíncrona, ela é enviada para uma área especial, e a fila síncrona continua correndo. Quando a função assíncrona termina sua execução, ela volta para a fila para "entregar a resposta" de sua execução. Vale lembrar que a área especial das assíncronas não é muito ordenada, ou seja, a primeira função assíncrona que entra não é, necessariamente, a primeira a sair, já que depende do tempo de execução de cada uma.

2. Quando você tem que enfileirar várias callbacks , que problema surge?

  Callback Hell: A causa do inferno de retorno de chamada é quando as pessoas tentam escrever JavaScript de uma forma em que a execução aconteça visualmente de cima para baixo, mas a ordem em que as coisas acontecem não é lida de cima para baixo, ela pula com base em quando as coisas são concluídas.

3. Por que as Promises são uma forma de resolver esse problema?

  As Promises facilitam o controle do fluxo assíncrono.

4. Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.

  Assíncrona.

5. Dada a resposta anterior, o que é fetch e para que ele serve?

  A Fetch API contém uma série de recursos desenvolvidos para lidar com requisições http no JavaScript. A função primária é a fetch() , utilizada para fazer chamadas às URL's das APIs . Trata-se de uma função assíncrona, baseada em uma promise.

 */
