// String Literal
//------

// let fullname = "John Doe";
// let age = 33;
// let address = "Manado";

// Halo nama saya John Doe, umur saya 33 Tahun
// dan saya tinggal di Manado

// let kalimat5 =
// "Halo nama saya" +
// fullname +
// ", umur saya " +
// age +
// " tahun dan saya tinggal di " +
// address;

// console.log(kalimat5);

// let kalimat6 = `Halo nama saya ${fullname}, umur saya ${age} tahun, dan saya tinggal di ${address}`;
// console.log(kalimat6);

// Arrow Function
//---------------

// function sayGreetings5(nama) {
//     return `Hello ${nama}`;
// }

// console.log(sayGreetings5("John"));

// const sayGreetings6 = (nama) => {
//     return `Hello ${nama}`;
// }

// console.log(sayGreetings6());

// Implicit Return Value
// const sayGreetings6 = (nama) => `Hello ${nama}`;
// console.log(sayGreetings6());

// Pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1);

// Pada Callback
// let numbers = [1, 2, 3, 4, 5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

// Default Parameter
//------------------

// const sayGreetings5 = (fullname) => {
//     if (fullname === undefined) {
//         fullname = "John Doe";
//     }
//     if (age === undefined) {
//         age = 30;
//     }
//     console.log(`Hello ${fullname}`);
// };

// sayGreetings5();

// const sayGreetings6 = (fullname = "John Doe", age) => {
//     console.log(`Hello ${fullname}`)
// };

// sayGreetings6();

