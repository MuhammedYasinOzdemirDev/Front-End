
//Element Olusturma

const li = document.createElement('li');

//add class 
li.className = "list-group-item  list-group-item-danger";

//attiribute add 

li.setAttribute("title", "Merhaba");
li.setAttribute("id", "yeni-li");
//text ekleme
const text = document.createTextNode("Merhaba");//text olusturma
li.appendChild(text);
//link Olusturma
const a = document.createElement("a");
a.className = "delete-item float-right";
a.setAttribute("href", "https://www.google.com.tr/");
a.innerHTML = ' <i class="fas fa-times"></i>';
li.appendChild(a);
const todolist = document.getElementById("task-list");
todolist.appendChild(li);


console.log(li);

