
//Elementlerin üzerinde gezinme 

const todolist = document.querySelector(".list-group"), card = document.querySelector(".card");
let value;

value = todolist;
console.log(value);
value.firstElementChild.textContent = "naber";
const todo = document.querySelector(".list-group-item:nth-child(2)");
value = todo;
console.log(value);
value.innerHTML = "<i>merhaba</i>"

//child nodes
value = todolist.childNodes;
console.log(value);

//children cocuklar 

value = todolist.children;
console.log(value);
value = todolist.children[0];
console.log(value);
todolist.children[todolist.children.length - 1].textContent = "Sen nasilsin";

value = card.children[1].children[0].textContent = "baslik";

value = todolist.firstElementChild;//ilk coccugu alir
console.log(value);
value = todolist.lastElementChild;//son cocuk;
console.log(value);
value = todolist.childElementCount;//eleman sayısını verir
console.log(value);

//parent Elementler ebeveyne ulasmammızı saglar

value = todo.parentElement;
console.log(value);
value = todo.parentElement.parentElement;
console.log(value);

value = todo.parentElement.children;//kardesleri erisim
console.log(value);

value = todo.nextElementSibling;//bir sonraki kardese erişim
console.log(value);
value = todo.previousElementSibling;//bir onceki kardes erisim
console.log(value);