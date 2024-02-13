
//Array

let names =["Yasin","Zeynep","mehmet"],years=[2002,1999,2010],mix=["aa",55,undefined];

console.log(names);
console.log(mix);
console.log(years);

console.log(names.length);//arrayin uzunlugunu ogrenme

//get array items 
console.log(names[2]);//2 indise erisiyor
//set array items 
years[1]=2005;//1 indis degistiriliyor.
console.log(years);
//add items
names[3]="merve";
console.log(names);
years.push(2022);//sona 2022 ekliyor
years.unshift(2010);//basa 2010 ekliyor.
console.log(years);

//indexOf

let veri=names.indexOf("Yasin");
console.log(veri);//kacinci indiste ogreniyor.

//sort and reverse

years.sort()
console.log(years);//sıralama yapar harf sırası veya sayıya gore
years.reverse();//ters cevirir
console.log(years);

//birlestirme

let veri2=names.concat(years);
console.log(veri2);

//splice

console.log(names);

names.splice(1,1);//1 indisten 1 tane siler
console.log(names);
names.splice(2,0,"ahmet");
console.log(names);

