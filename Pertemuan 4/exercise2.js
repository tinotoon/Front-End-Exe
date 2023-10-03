// Buatlah fungsi yang menerima 1 parameter angka
// dan mengembalikan string apakah angka yang dimasukkan
// adalah bilangan ganjil atau genap 
// dengan menggunakan bentuk IIFE dan Callback function

//IIFE
// (function (angka = 30){
//     const modulus = angka % 2;
//     let result = modulus == 0 ? "Angka genap" : "Angka ganjil";
//     console.log(result);
// })();

//Callback
// function ganjilGenap(num, callback) {
//     const formula = num % 2;
//     const isNum = formula == 0 ? "Genap" : "Ganjil";
//     callback(isNum);
// }

// function hasil(isNum) {
//     console.log(isNum);
// }

// ganjilGenap(10, hasil);

