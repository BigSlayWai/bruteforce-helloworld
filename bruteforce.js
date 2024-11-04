const target = "Hello world";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
let result = "";

function randomCharacter() {
    return letters.charAt(Math.floor(Math.random() * letters.length));
}

async function bruteForce() {
    for (let letter of target) {
        while (true) {
            const i = randomCharacter();
            console.log(result + i); // Prints current state of result plus random letter

            if (i === letter) {
                result += i; // Concatenating the correct letter to the result
                break;
            }
            await new Promise(resolve => setTimeout(resolve, 10)); // Sleep for 10ms
        }
    }
}

bruteForce();
