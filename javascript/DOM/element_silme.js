
//Element silme

const tasklist = document.querySelector("#task-list");
//tasklist.remove(); hepsini siler
tasklist.children[2].remove()//3 elemanı siler
//tasklist.removeChild(tasklist.children[0]);//ilk elemani siler

//attribute silme

tasklist.firstElementChild.removeAttribute("class");//class siler 
for (let i in tasklist.children)
    tasklist.children[i].removeAttribute("class");//butun classları siler