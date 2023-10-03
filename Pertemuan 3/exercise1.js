function cekAngka(angka){
    let modulus = angka % 2;
    let result = modulus == 0 ? "angka genap" : "angka ganjil";
    return result;
}
let output = cekAngka(10);
console.log(output);