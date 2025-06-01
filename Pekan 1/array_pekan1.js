const animals = ["Cat", "Dog", "Fish", "Bird"]

//with loop for of
for (const animal of animals){
    console.log(`Hewan : ${animals}`);
}

//without loop
console.log(animals[0], animals[2]);

//object
const user = {
    name: "Aufa",
    age: 22,
    major: "Informatika",
};

//pertama memanggil key, yang kedua memanggil key
console.log(user.name, user["age"]);

//for in
for (const key in user){
    console.log(`${key}: ${user[key]}`);
}