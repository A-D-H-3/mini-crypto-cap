const renderCrypto = (coin) => {
  const cryptoCard = document.getElementById("card");
  const cryptoName = coin.id;
  const cryptoRank = coin.market_cap_rank;
  const cryptoImage = coin.image.large;
  cryptoCard.innerHTML = `<img src=${cryptoImage} class="card-img-top" alt="image of various cryptocurrencies" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/${cryptoName}" role="button" id="cryptoBtn">${cryptoName}</a></p>
  <p>Current Price: ${coin.market_data.current_price.usd}</p>
  <p>Market Cap Rank: ${cryptoRank}</p>`;
};

const renderError = () => {
  const cryptoCard = document.getElementById("card");
  cryptoCard.innerHTML = `<p><a class="btn btn-primary" href="https://www.coingecko.com/en"role="button" id="cryptoBtn">Please use valid Crypto ID!</a></p>`;
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
        renderCrypto(coin);
      })
      .catch(() => {
        renderError();
      });
  });
});






