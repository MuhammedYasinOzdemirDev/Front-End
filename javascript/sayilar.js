//NUMBERS

let veri,int,float,kontrol;

veri=Number("5");
int=parseInt("5.4");
float=parseFloat("5.45");
kontrol=isNaN("sd");//sayimi kontrol eder.

console.log(kontrol);
console.log(int);
console.log(float);
console.log(veri);
console.log(typeof veri);

let sayi=15.55456,v;
v=sayi.toPrecision(5);//soldan itibaren 5 yer ayırır.
console.log(v);
v=sayi.toFixed(5);//virgülden itibaren bosluk birakir.

//Math 

veri=Math.PI;
console.log(veri);
veri=Math.round(3.4);//yuvarlama yapar
console.log(veri);
veri=Math.ceil(3.4);// yukari yuvarlar
console.log(veri);
veri=Math.floor(3.7);//asagi yuvarlar
console.log(veri);
veri=Math.random();//random sayi ureti 1 ile 0 arasinda
console.log(veri);
veri=Math.floor(Math.random()*10);//0 10 arasinda tam sayi rasgeler uretir
console.log(veri);
veri=Math.min(1,5,88,2);//minumum sayiyi bulur
console.log(veri);
veri=Math.max(1,4,88,5);//max sayiyiy bulur
console.log(veri);