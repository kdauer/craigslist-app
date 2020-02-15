let cardImage = document.querySelector("card-img-top");
let cardTitle = document.querySelector("card-title");
let cardPrice = document.querySelector("card-price");

let messageBoxSent = document.querySelector(".sent-container");
let price = document.querySelector("#price");
let description = document.querySelector("#description");

function clickNext() {
  messageBoxSent.style.display = "block";
  setTimeout(function() {
    messageBoxSent.style.display = "none";
  }, 2000);
}

let backToList = document.querySelector("#message-btn");
backToList.onclick = function() {
  clickNext();
};
