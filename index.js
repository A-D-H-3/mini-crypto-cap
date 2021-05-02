document.addEventListener("DOMContentLoaded", function(){
    // console.log(data);


    // let cryptoResults = document.getElementById("data-results");
    // cryptoResults.innerHTML = renderCoins(coinData)
    const searchForm = document.getElementById("search-field-container");
    const searchField = document.getElementById("search-field");

    searchForm.addEventListener("submit", function (event){
        event.preventDefault();
        console.log(searchField.value);
    })
  // let content = document.getElementById("content");
  // content.innerHTML =
  fetch(
    "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD",
    {
      headers: {
        "X-CMC_PRO_API_KEY": "fcddb729-807f-41a8-ac05-f514a689c2f1",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});

// const renderCoins = coins => {
//     let coinsHTML = coins.map (cryptoResults =>
// return ''



// }


