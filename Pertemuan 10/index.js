//rest & spread operator

//Rest Parameter

//Tanpa Rest
// const penjumlahanArray = (a, b, c) => {
//     const array = [a, b, c];
//     let total = 0;
//     array.forEach(item => {
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3);

// Dengan Rest
// const penjumlahanArray = (a, b, c, ...params) => {
//     let total = 0;
//     params.forEach((item) => {
//       total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Spread Operator
// let array1 = [1, 2, 3, 4, 5];

// console.log(...array1);
// tanpa ... maka outputnya tetap array, ketika menggunakan ... maka outputnya keluar dari array atau keluar dari []

//1. Duplikasi Array
// let array2 = [...array1];
// console.log(array2);
// array1.push(6);
// console.log(`Array 1 = ${array1}`);
// console.log(`Array 2 = ${array2}`);

//2. Menggabungkan Array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, 4, ...array2, ...array3];
// console.log(combineArray6);

// Pada Objek
// let john = {
//   fullName: "John",
//   age: 30,
//   address: "Manado",
// };

//Duplikasi Objek
// let student = { ...john };
// john = { ...john, job: "Teacher" };
// console.log(john);

//Menggabungkan Objek
// let obj1 = { a: 1, b: 2};
// let obj2 = { c: 3, d: 4};
// let combineObj = { ...obj1, ...obj2};
// console.log(combineObj);

//Destructuring
// let buah = ["mangga", "pisang", "anggur", "pepaya", "apel"];
// let [, , buah3, ...buahLain] = buah;
// console.log(buahLain);

// let orang = {
//   nama: "Joko",
//   umur: 18,
//   sudahMenikah: false
// };

// let { nama, umur: age, sudahMenikah } = orang;
// console.log(nama, age, sudahMenikah);
