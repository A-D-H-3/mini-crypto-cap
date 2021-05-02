const renderCrypto = (coin) => {
  const cryptoMarket = document.getElementById("cryptoMarket");
  cryptoMarket.innerHTML = `<p>${coin.market_data.current_price.usd}</p>
  <p>${coin.market_cap_rank}</p>`;
};
const renderError = () => {
  const cryptoMarket = document.getElementById("cryptoMarket");
  cryptoMarket.innerHTML = `<p><a href="https://www.coingecko.com/en">Please use valid Crypto ID!</a></p>`;
};

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchCrypto");
  const searchField = document.getElementById("search-field");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const lower = searchField.value.toLowerCase();
    fetch(`https://api.coingecko.com/api/v3/coins/${lower}`)
      .then((response) => response.json())
      .then((coin) => {
        console.log(coin.market_data.current_price.usd);
        renderCrypto(coin);
      })
      .catch(() => {
        renderError();
      });
  });
});
