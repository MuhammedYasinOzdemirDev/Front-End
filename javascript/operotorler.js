//Aritmetik oporetorler
let toplam,carpim,bolme,cikarma;
const a=20,b=5;
toplam=a+b;
cikarma=a-b;
carpim=a*b;
bolme=a/b;
console.log("toplam:",toplam)
console.log("cikarma:",cikarma)
console.log("carpim:",carpim)
console.log("bolme:",bolme)
//Atama Operatorler
let c,d;
c=4;
d=c++;
console.log(c)
console.log(d)
d=++c;
console.log(c)
console.log(d)
let veri=2;
veri+=d;
console.log(veri)
veri*=c;
console.log(veri)
veri%=d;
console.log(veri)
//karsılastırma operetorleri
let v,e,f;
e=2;
f="2";
v=e==f;//true
v=e===f;//false cunku veri turu esitmi diyede bakiyor
console.log(v)
e=4;
f=2;
console.log(e>=f)
console.log(f<=e)
console.log(e!=f)
console.log(v)
//mantiksal operotorler
v=(e>f) && (e==f);
console.log(v)
v=(e>f) || (e==f)
console.log(v)