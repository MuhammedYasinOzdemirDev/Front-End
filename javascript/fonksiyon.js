function merhaba() {
    console.log("Merhaba");
}
merhaba();
for (let i = 0; i < 10; i++)
    merhaba();
function user(name, surname, age) {
    console.log(`${name} ${surname} - ${age}`);
}
user("Muhammed Yasin", "Ozdemir", 18);
function yashesapla(dogumyili) {
    return (new Date().getFullYear() - dogumyili);
}
console.log(yashesapla(2003));
function ehliyet_kontrol(dogumyili) {
    let yas = yashesapla(dogumyili);
    if (yas >= 18)
        return true;
    else
        false
}
if (ehliyet_kontrol(2005))
    console.log("Ehliyet alabilir");
else
    console.log("Ehliyet alamaz");