//Cogul  Element Secimi
let veri;
veri = document.getElementsByClassName("list-group-item");
console.log(veri);
veri[2].style.fontSize = "40px";
for (let i = 0; i < veri.length; i++) {
    veri[i].style.color = "orange";
    veri[i].textContent = "new-item";
}
let veri2;

veri2 = document.getElementsByTagName("li");
console.log(veri2);
console.log(document.getElementsByTagName("a"));
veri2 = document.getElementById("task-list").getElementsByTagName("a");
console.log(veri2);
let veri3;
veri3 = document.querySelectorAll("li");
veri3.forEach(function (item, index) {
    console.log(item.textContent = `${index + 1} *item`);
});

