const renderCrypto = (coin) => {
  const cryptoCard = document.getElementById("card");
  const cryptoName = coin.id;
  const cryptoRank = coin.market_cap_rank;
  const cryptoImage = coin.image.large;
  cryptoCard.innerHTML = `<img src=${cryptoImage} class="card-img-top" alt="image of searched cryptocurrency" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/${cryptoName}" role="button" id="cryptoBtn">${cryptoName}</a></p>
  <p>Current Price: ${coin.market_data.current_price.usd}</p>
  <p>Market Cap Rank: ${cryptoRank}</p>`;
};

const renderError = () => {
  const cryptoCard = document.getElementById("card");
  cryptoCard.innerHTML = `<p><a class="btn btn-primary" href="https://www.coingecko.com/en"role="button" id="cryptoBtn">Please use valid Crypto ID!</a></p>`;
};

const cryptoPrice = document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchCrypto");
  const searchField = document.getElementById("search-field");
  const topFive = document.getElementById("card");
  topFive.innerHTML = `<img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" class="card-img-top" alt="image of searched cryptocurrency" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/bitcoin" role="button" id="cryptoBtn">Bitcoin</a></p>
  <img src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" class="card-img-top" alt="image of searched cryptocurrency" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/ethereum" role="button" id="cryptoBtn">Ethereum</a></p>
  <img src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707" class="card-img-top" alt="image of searched cryptocurrency" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/tether" role="button" id="cryptoBtn">Tether</a></p>
  <img src="https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256" class="card-img-top" alt="image of searched cryptocurrency" />
  <p><a class="btn btn-primary" href="https://www.coingecko.com/en/coins/dogecoin" role="button" id="cryptoBtn">dogecoin</a></p>`;

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
