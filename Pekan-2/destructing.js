const req = {
    body: {
        name : "Aufa",
        age : 20,
        major : "Informatika",
    }
}

//destructing array
const family = ["Michael", "John", "Jonas"];

//destructing key dari object diatas
const {name, age, major} = req.body;
console.log(name, age, major);
 

console.log(family[0], family[1], family[2]);

const [husband, son, wife] = family;
console.log(husband, son, wife);

//rest parameter
function sum(a, b){
    const hasil = a + b;
    return hasil;
}

sum (1, 2);

function sum(...numbers){
    let hasil = 0;

    for (const number of numbers) {
        hasil += number;
    }

    return hasil;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2));

// contoh without spread syntax
const user = {
    name: "Aufa",
    major: "Informatika",
};

// const newUser = {
//     name: user.name,
//     major: user.major,
//     age: 22,
// };

// contoh with spread syntax
const newUser = {
    ...user,
    age: 22,
};

console.log(newUser);

