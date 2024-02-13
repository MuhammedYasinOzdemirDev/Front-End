//global scope globalda tanımlanana scope
/*
var veri1=10;
let veri2=2;
const veri3=15;
*/
//fonksiyon scope
/*
function fonksiyon(){
    var veri1=10;
let veri2=2;
const veri3=15;
}
*/
//Block scope
/*
if(true){
    var veri1=10;
let veri2=2;
const veri3=15;
}
*/
//not block ta var değişkeni değişirken let degisgeni degismez aradaki fark budur
var veri1 = 10;
let veri2 = 2;
const veri3 = 15;
if (true) {
    var veri1 = 20;
    let veri2 = 10;
    const veri3 = 8;
    console.log(veri1, veri2, veri3);
}
console.log(veri1, veri2, veri3);
//genelde let kullanılır.