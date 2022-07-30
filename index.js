searchquery = document.getElementById("searchquery");
let searchBtn = document.querySelector(".searchBtn");

searchBtn.onclick = function () {
  let url = "https://www.google.com/search?q=" + searchquery.value;
  window.open(url, "_self");
};
