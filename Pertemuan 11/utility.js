let fullName = "John Doe";

let numbers = [1, 2, 3, 4, 5];

let john = {
    fullName: "John Doe",
    age: 33,
    address: "Manado",
};

export { fullName, numbers as angka, john };


//Export Default
let hello = () => {
    console.log("Hello Module");
};

export default hello;


