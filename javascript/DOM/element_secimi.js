let veri;

veri = document.getElementById("header");
console.log(veri);
console.log(veri.id);
console.log(veri.className);
console.log(veri.innerText);

//style

veri.style.color = "red";
veri.style.fontSize = "50px";
veri.style.fontWeight = "bold";
veri.style.textAlign = "center";

veri.innerHTML = "<i>Yapılacak Listesi <i/>"//innerText yazıyı degistirir 
veri = document.get

let veri2;
veri2 = document.querySelector(".card-header");
console.log(veri2);
console.log(document.querySelector("div"));
let veri3;
veri3 = document.querySelector("li");
veri3.style.color = "yellow"
console.log(veri3);
document.querySelector("li:last-child").style.color = "red";
document.querySelector("li:nth-child(2)").style.color = "blue"
document.querySelector("li:nth-child(3)").className = "list-group-item list-group-item-primary"
document.querySelector("li").classList.add = "active";//class ekleme

