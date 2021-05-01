const renderCrypto = (coin) => {
  const cryptoMarket = document.getElementById("cryptoMarket");
  cryptoMarket.innerHTML = `<p>${coin.market_data.current_price.usd}</p>`;
};

document.addEventListener("DOMContentLoaded", function () {
  // console.log(data);
  const searchForm = document.getElementById("search-field-container");
  const searchField = document.getElementById("search-field");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(searchField.value);
  });
  // let content = document.getElementById("content");
  // content.innerHTML =
  fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then((response) => response.json())
    .then((coin) => {
      // const coinData = coin.data;
      // const found = coinData.find((element) => element.name === "Bitcoin");
      console.log(coin.market_data.current_price.usd);
      renderCrypto(coin);
    });
});
