/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke(); 

// Promise { <pending> } */

/* const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke(); 

// There is no Esc key on Chuck Norris' keyboard, because no one escapes Chuck Norris. */

// Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? 
// Agora entra o .catch() ! Vamos adicioná-lo ao código:

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev'; // Note que para forçar o erro retiramos o https:// do início da url .

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
