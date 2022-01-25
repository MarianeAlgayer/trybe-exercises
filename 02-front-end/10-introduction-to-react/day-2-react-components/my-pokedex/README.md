Você vai implementar de forma simplificada uma **Pokedex**! A sua aplicação precisa mostrar todos os **pokemon**s presentes no arquivo `data.js`.
É obrigatório que você implemente pelo menos estes dois componentes:

1. **Pokemon** : como o próprio nome diz, esse componente representa um **pokemon**. Esse componente recebe como entrada um objeto que contém informações referentes a um **pokemon** específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:
- nome do **pokemon**;
- tipo do **pokemon**;
peso médio do **pokemon**, acompanhado da unidade de medida usada;
- imagem do **pokemon**.

2. **Pokedex** : esse componente representa a enciclopédia de **pokemon**s. Esse componente recebe como entrada uma lista de **pokemon**s para serem mostrados na tela. Para cada um desses **pokemon**s recebidos, **Pokedex** chama o componente **Pokemon**.