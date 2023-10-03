// // CLass in JS
// //------------

// //Object Literal
// const mobil1 = {
//     transmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transmisi} dinyalakan`)
//     }
// };

// const mobil2 = {
//     transmisi: "Automatic",
//     bahanBakar: "Solar",
//     mesin: 2000,
//     nyalakanMesin: function(){
//         console.log(`Mobil ${this.transmisi} dinyalakan`)
//     }
// };

class Mobil {
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin(){
        console.log(`Mobil ${this.transmisi} dinyalakan`)
    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic", "Solar", 2000);
mobil2.nyalakanMesin();
console.log(mobil1, mobil2);


class Toyota extends Mobil{
    constructor(merk, warna, transmisi, bahanBakar, mesin){
        super(transmisi, bahanBakar, mesin);
        this.merk = merk;
        this.warna = warna;
    }
    //Overriding
    nyalakanMesin(){
        console.log(`Mobil merk ${this.merk} dinyalakan`);
    }
}

const agya = new Toyota("Agya", "Putih", "Automatic", "Bensin", 1200);
agya.nyalakanMesin();
console.log(agya);

