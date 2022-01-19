// const fetch = require('node-fetch');

const getCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error;
  }
}

/* const fetch = require('node-fetch');

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  console.log(coins);
}

fetchCoins(); */

const showCoins = async () => {
  const list = document.querySelector('.crypto-list');
  const coins = await getCoins();
  console.log(coins);

  for (let i = 0; i <= 9; i += 1) {
    const name = coins[i].name;
    const symbol = coins[i].symbol;
    const priceUsd = Number(coins[i].priceUsd).toFixed(2);

    const li = document.createElement('li');
    li.innerText = `${name} (${symbol}): ${priceUsd}`;
    list.appendChild(li);
  }
}

/* const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
} */

/* const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((_, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
} */

window.onload = () => showCoins();
