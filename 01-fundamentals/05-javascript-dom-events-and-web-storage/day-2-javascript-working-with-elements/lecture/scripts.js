/* Acesse o elemento elementoOndeVoceEsta */
console.log(document.getElementById('primeiroFilhoDoFilho').parentNode);

/* Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele */
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.background = 'red';

/* Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */
let text = document.getElementById('elementoOndeVoceEsta').firstElementChild
text.innerText = 'Olá!'

/* Acesse o primeiroFilho a partir de pai */
console.log(document.getElementById('pai').firstElementChild);

/* Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta */
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

/* Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta */
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

/* Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta */
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

/* Agora acesse o terceiroFilho a partir de pai */
console.log(document.getElementById('pai').children[2]);

/* Crie um irmão para elementoOndeVoceEsta */
let newSibiling = document.createElement('section');
newSibiling.id = 'irmaoElementoOndeVoceEsta';
document.getElementById('pai').appendChild(newSibiling);

/* Crie um filho para elementoOndeVoceEsta */
let newChild = document.createElement('section');
newChild.id = 'terceiroEAgoraSimUltimoFilhoDoFilho';
document.getElementById('elementoOndeVoceEsta').appendChild(newChild);

/* Crie um filho para primeiroFilhoDoFilho */
let newChild2 = document.createElement('section');
newChild2.id = 'filhoDoPrimeiroFilhoDoFilho';
document.getElementById('primeiroFilhoDoFilho').appendChild(newChild2);

/* A partir desse filho criado, acesse terceiroFilho */
console.log(document.getElementById('filhoDoPrimeiroFilhoDoFilho').parentNode.parentNode.nextElementSibling);

/* Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho */
let pai2 = document.getElementById('pai');

for (let i = pai2.children.length - 1; i >= 0; i -= 1) {
    let currentChild = pai2.children[i];

    if (currentChild.id !== 'elementoOndeVoceEsta') {
        currentChild.remove();
    }
}

let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

for (let i = elementoOndeVoceEsta.children.length - 1; i >= 0; i -= 1) {
    let currentChild = elementoOndeVoceEsta.children[i];

    if (currentChild.id !== 'primeiroFilhoDoFilho') {
        currentChild.remove();
    }
}
