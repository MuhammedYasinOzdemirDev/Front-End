
//Element guncelleme

const cardheader = document.querySelector("card-header");
const h2 = document.createElement("h2");
h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("Listeler"));
const parent = document.querySelector(".card");
parent.replaceChild(h2, cardheader);

console.log(h2);