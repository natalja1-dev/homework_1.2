const users = [
    { id: 1, name: "Mari", age: 22, active: true },
    { id: 2, name: "Jüri", age: 17, active: false },
    { id: 3, name: "Kati", age: 31, active: true },
    { id: 4, name: "Martin", age: 19, active: false },
    { id: 5, name: "Laura", age: 26, active: true }
];


// 3.1. Kuva console.log() abil kõikide kasutajate nimed.
users.forEach(user => {
    console.log(user.name);
});


// 3.2 Kasuta .filter() meetodit, et leida kõik aktiivsed kasutajad.
const activeUsers = users.filter(user => user.active === true);

console.log(activeUsers);


// 3.3. Kasuta .filter() meetodit, et leida kõik vähemalt 18-aastased kasutajad.
const adultUsers = users.filter(user => user.age >= 18);

console.log(adultUsers);


// 3.4. Kasuta .map() meetodit, et luua uus massiiv, mis sisaldab ainult kasutajate nimesid.
const userNames = users.map(user => user.name);

console.log(userNames);


// 3.5. Kasuta .find() meetodit, et leida kasutaja, kelle id on 3.
const userWithId3 = users.find(user => user.id === 3);

console.log(userWithId3);


// 3.6. Kirjuta tavaline funktsioon getUserStatus(user), mis tagastab: "Aktiivne", kui kasutaja on aktiivne; "Mitteaktiivne", kui kasutaja ei ole aktiivne.
function getUserStatus(user) {
    if (user.active) {
        return "Aktiivne";
    } else {
        return "Mitteaktiivne";
    }
}

console.log(getUserStatus(users[0]));
console.log(getUserStatus(users[1]));


// 3.7. Kirjuta arrow function getGreeting(user), mis kasutab template literal'it ja tagastab näiteks: "Tere, Mari! Sa oled 22 aastat vana."
const getGreeting = (user) => {
    return `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
};

console.log(getGreeting(users[0]));


// 3.8. Kasuta destructuring'ut, et võtta ühe kasutaja objektist välja name ja age.
const { name, age } = users[0];

console.log(name);
console.log(age);


// 3.9. Kasuta spread-süntaksit, et luua uus kasutaja, kelle andmed on: { id: 6, name: "Karl", age: 24, active: true }
const newUser = {
    id: 6,
    name: "Karl",
    age: 24,
    active: true
};

const usersWithKarl = [...users, newUser];

console.log(usersWithKarl);
console.log(users);


// 3.10. Lisa ühele kasutajale valikuline omadus address: address: { city: "Tallinn" }
// Kuva kasutaja linn optional chaining'u abil: user.address?.city
//Kui linna ei ole, kuva nullish coalescing'u abil "Linn puudub": user.address?.city ?? "Linn puudub"
const usersWithAddress = users.map(user => {
    if (user.id === 1) {
        return {
            ...user,
            address: {
                city: "Tallinn"
            }
        };
    }

    return user;
});

const mari = usersWithAddress.find(user => user.id === 1);
const juri = usersWithAddress.find(user => user.id === 2);

console.log(mari.address?.city);

console.log(mari.address?.city ?? "Linn puudub");
console.log(juri.address?.city ?? "Linn puudub");


// 3.11. Käi kasutajad läbi .forEach() abil ja kuva iga kasutaja kohta: Mari – Aktiivne Jüri – Mitteaktiivne
users.forEach(user => {
    console.log(`${user.name} – ${getUserStatus(user)}`);
});


// 3.12. Sorteeri vanuse järgi noorimast vanimani
const sortedUsers = [...users].sort((a, b) => a.age - b.age);

console.log(sortedUsers);
users.forEach(user => {
    console.log(user.name);
});


