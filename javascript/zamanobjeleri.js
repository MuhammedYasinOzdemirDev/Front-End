
//Data Object

let zaman=new  Date();
console.log(zaman);
console.log(typeof zaman);

//Get object


console.log(zaman.getTime());
console.log("Ay : ",zaman.getMonth());
console.log("Gün : ",zaman.getDay());
console.log("Yıl : ",zaman.getFullYear());
console.log("Ayın gunu ",zaman.getDate());
console.log("Saat : ",zaman.getHours());

//Set object degiştirmek

zaman.setFullYear(2024);
zaman.setDate(12);
console.log(zaman);

let birtday=new Date(2003,7,18);
console.log(zaman.getFullYear()-birtday.getFullYear());
