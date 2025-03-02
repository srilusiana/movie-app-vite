//data
const dataNama = ["kia", "tiara", "husnul", "lusi", "budi", "andi", "joko", "hadi", "gita", "citra"];
const dataGolongan = ["A", "B", "C", "B", "C", "B", "C", "A", "A", "A"];
const dataStatus = ["nikah", "belum", "nikah", "belum", "nikah", "belum", "nikah", "belum", "nikah", "belum"];

//data gaji
const dataGajiPokok = {A: 10000000, B: 8000000, C: 5000000};
const dataTunjangan =  {A: 2000000, B: 1500000, C: 1000000};

//perulangan untuk menampilkan data
for (let i = 0; i < 10; i++) {
    let nama = dataNama[i];
    let golongan = dataGolongan[i];
    let status = dataStatus[i];

    let gajiPokok = dataGajiPokok[golongan];
    let tunjangan = status == "nikah" ? dataTunjangan[golongan] : 0;
    let totalGaji = gajiPokok + tunjangan;

    console.log(`Nama: ${nama}`);
    console.log(`Golongan: ${golongan}`);
    console.log(`Status: ${status}`);
    console.log(`Gaji Pokok: ${gajiPokok}`);
    console.log(`Tunjangan: ${tunjangan}`);
    console.log(`Total Gaji: ${totalGaji}`);
    console.log("\n");
}