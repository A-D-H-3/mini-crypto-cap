document.addEventListener("DOMContentLoaded", function(){
    console.log(data);
}) 
const cryptoResults = document.getElementById("data-results");
const searchForm = document.getElementById("search-field-container");
const searchField = document.getElementById("search-field");

searchForm.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(searchField.value);
})