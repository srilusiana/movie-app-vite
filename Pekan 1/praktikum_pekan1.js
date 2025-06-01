//contoh deklarasai variabel
const name = "Aufa Billah";
const major = "Informatika";
const bod = 2001;

// template literals
const greeting =`
Hello, My name is ${name}.
Umur Saya ${2022 - bod}`;

//kondisional
const result = 95;
if (result > 90){
    console.log("Grade : A");
} else if (result > 80){
    console.log("Grade : B");
} else if (result > 70){
    console.log("Grade : C");
} else {
    console.log("Grade : D");
}

//Ternary
const age = 23;
age > 21 ? console.log("Dewasa") : console.log("Belum Dewasa");

//looping for
for (let i = 1; i < 11; i++){
    console.log(`Perulangan For ke-${i}`);
}

//looping while
let i = 1;

while(i < 11){
    console.log(`Perulangan While ke-${i}`);
i++;
}

//fungsi deklarasi
function umur(bod){
    //parameter adalah variabel sementara didalam fungsi
    //yang suatu saaat nanti dapat diberikan nilai atau value
    const year = 2022;
    const age = 2022 - bod;

    //return value
    return age
}
console.log(umur(1997));
console.log(umur(2000));

//fungsi ekspresi
const eksAge = function (bod1){
    const years = 2022;
    const age1 = years - bod1;
    return age1;
}
console.log(eksAge(2000));
console.log(eksAge(1998));

//arrow function
const arrAge = (bod2)=> 2022 - bod2;
console.log(arrAge(2000));
console.log(arrAge(1998));

console.log(greeting);

console.log(name, major);

