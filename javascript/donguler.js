
//while
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
while (i > 0) {
    console.log(i);
    i--;
}
let j = 0;
while (j < 100) {
    if (j == 40)
        break;
    console.log(j);
    j += 10;
}

//do while

do {
    console.log(j);
    j++;
} while (j <= 50);

//for 

for (let i = 0; i < 10; i++)
    console.log(i);
for (let j = 20; j >= 0; j--) {
    if (j % 2 == 0)
        console.log(j);
}
let toplam = 0;
for (let z = 0; z < 10; z++)
    toplam += z;
console.log("toplam : ", toplam);

let cities = ["istanbul", "Ankara", "Bursa", "Edirne", "Siirt", "Mus", "Trabzon"];
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
for (let i in cities) {
    console.log(`${i}- ${cities[i]}`);//alt gr virgul isareti ``
}
//for each
cities.forEach(function (item) {
    console.log(item)
});

let users = [
    { firstName: "Muhammed", surname: "yasin" },
    { firstName: "aa", surname: "as" },
    { firstName: "Zeynep", surname: "kaya" }
]
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    console.log(users[i].firstName, users[i].surname);
}
for (let i in users) {
    console.log(`${i + 1} - ${users[i].firstName} ${users[i].surname}`);
}

//map dizi haline cevirir

let veri = users.map(function (item) {
    return item.firstName + " " + item.surname;
});
console.log(veri);
let numbers = [1, 4, 5, 8, 4, 2];
veri = numbers.map(function (item) {
    return Math.pow(item, 3);
});
console.log(veri);
