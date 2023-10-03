//console.log(greetings("John")); // Argument
//function greetings(){
//    return "Hello";
//}


//const greetings = function (name) {
    // Parameter
  //  console.log(age);
    //return "Hello";
//};
//console.log(job);
//console.log(greetings("John")); // Argument


//IIFE (Immediately Invoked Function Expression)
//Anonymous Function

//const output = (function () {
  //  return "Hello IIFE";
//})();

//console.log(output);


//Callback Function

function createGreetings(name, callback) {
    const greetings = "Hello" + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings("John", logGreetings);