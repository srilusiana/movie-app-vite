// kode perintah 
import users from "./data.mjs";

const index = () => {
    users.forEach(function(user){
        console.log(user);
    })
}

// Menampilkan data menggunakan map
const viewUsers = () => {
    console.log("Daftar Data:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.name}, Umur: ${user.age}, Alamat: ${user.address}, Email: ${user.email}`);
    });
};

// Menambah 2 data baru menggunakan push
const addUser = () => {
    users.push(
        { name: "Nunu", age: 25, address: "Bali", email: "Nunu@gmail.com" },
        { name: "Adel", age: 24, address: "Aceh", email: "Adelia@gmail.com" }
    );
    console.log("Dua data baru telah ditambahkan.");
};

// Menghapus data berdasarkan indeks
const deleteUser = (index) => {
    if (index >= 0 && index < users.length) {
        console.log(`User ${users[index].name} telah dihapus.`);
        users.splice(index, 1);
    } else {
        console.log("Index tidak valid.");
    }
};

export default { viewUsers, addUser, deleteUser };
