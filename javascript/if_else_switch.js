
//if and else
let name = "yasin", age = 65, isstudent = true;

if (name = "yasin") {
    console.log("Merhaba yasin Bey");
}
else {
    console.log("Merhaba");
}

if (age > 18 && age < 25) {
    console.log("Unuveriste");
}
else if (age > 14 && age < 18) {
    console.log("lise");
}

else if (age > 10 && age < 14) {
    console.log("ortaokul");
}

else if (age > 7 && age < 10) {
    console.log("ilkokul");
}
else
    console.log("okumuyor");

if (isstudent)
    console.log("a");
else
    console.log("b");
let id = 224;
if (typeof id != "undifened")
    console.log(id);
else
    console.log("ssqa");

let islem = 5;
switch (islem) {
    case 1:
        console.log(String(islem) + "nolu"); break;
    case 2:
        console.log(String(islem), "nolu"); break;
    case 3:
        console.log(String(islem), "nolu"); break;
    default: console.log("gecersiz")



}
switch ((new Date().getDay() + 2) % 7) {
    case 0:
        console.log("Pazar"); break;
    case 1:
        console.log("Pazartesi"); break;
    case 2:
        console.log("Salı"); break;
    case 3:
        console.log("Çarşamba"); break;
    case 4:
        console.log("Perşembe"); break;
    case 5:
        console.log("Cuma"); break;
    case 6:
        console.log("Cumartesi"); break;
    default: console.log("Gun tanimsiz");
}


