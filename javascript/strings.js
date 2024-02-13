
//STRİNGS

const firstname="Yasin",surname="Ozdemir",age="19";

//string birlestirme
let veri;
veri=firstname+" "+surname;
console.log(veri);
veri=firstname+' '+surname+' '+age+' İstanbul\'da yasiyor';
console.log(veri);
veri=firstname.concat(" ",surname," ",age," İstanbul'da yasiyor")
console.log(veri);

//String buyuk kucuk yapma

veri=veri.toUpperCase();
console.log(veri);
veri=veri.toLowerCase();
console.log(veri);

//Stringden parca alma

let veri2;
veri2=veri.substring(1,5);//1 ile 5 index arasi alınıyor
console.log(veri2);
veri2=veri.slice(2,5);
console.log(veri2);

veri2=veri.indexOf("sin");
console.log(veri2);//verinin index numarasini bulur

veri2=veri.replace("yasin","Muhammed");
console.log(veri2); //veriyi degistirir

let veri3i,veri4;
veri3=veri.split(" ");//bosluga gore boler diziye atar
console.log(veri3);

veri4=veri.length;//string uzunlugu bulur.
console.log(veri4);


