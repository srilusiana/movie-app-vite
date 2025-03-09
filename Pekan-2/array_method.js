const names = ["Michael", "Hannah", "Jonas"];

// panggil iteration method foreach

names.forEach(function (name) {
    console.log(`Nama: ${name}`);
});

const formattedName = names.map(function (name){
    return `Mr/Mrs. ${name}`;
});

console.log(formattedName);