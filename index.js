document.addEventListener("DOMContentLoaded", function(){
    console.log(data);


    const cryptoResults = document.getElementById("data-results");
    const searchForm = document.getElementById("search-field-container");
    const searchField = document.getElementById("search-field");

    searchForm.addEventListener("submit", function (event){
        event.preventDefault();
        console.log(searchField.value);
    })
  // let content = document.getElementById("content");
  // content.innerHTML =
  fetch(
    "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": "fcddb729-807f-41a8-ac05-f514a689c2f1",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
});
