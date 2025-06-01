import controller from "./controller.mjs";

const main = () => {
    console.log("Sebelum Menambah Data:");
    controller.viewUsers();

    controller.addUser();

    console.log("\nSetelah Menambah Data:");
    controller.viewUsers();

    controller.deleteUser(2);

    console.log("\nSetelah Menghapus Data:");
    controller.viewUsers();
};

main();
