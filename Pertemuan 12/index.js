import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsync from "./ambilDataUserAsync.js";

let messages = async () => {
    let msg = await helloWorld();
    console.log(msg);
}

messages();
ambilDataUser();
ambilDataUserAsync();