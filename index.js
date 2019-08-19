// # javascript-session1-ic
//
// Try to do this without using the code from previous work.
// Only use the JavaScript reference guide: https://docs.google.com/document/d/1sdPHe4xQt_qEzbePtZRdTOcX2hDWpBVV8E_L8JvcPrI/
//
//     Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
// - If they press 1, alert "Challenge goes here".
// - If they press 2, alert "2".
// - If they press 3, alert "Hello World".
//
//
//

function main() {
    let userInput = (prompt("Enter '1', '2', '3' or 'q' to quit"));
    let userInputnum = parseInt(userInput);

    while (userInput !== "q") {

        if (userInputnum === 1) {
            alert("Challenge goes here");
            press1();

        }

        if (userInputnum === 2) {
            alert("2")
        }

        if (userInputnum === 3) {
            alert("Hello World")
        }
        userInput = prompt("Enter '1', '2', '3' or 'q' to quit");
        userInputnum = parseInt(userInput);
    }
}

main();

//### Challenge
// - If they press 1, ask them to press a, b, or c in a different function. If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".

function press1() {
    let userInput2 = prompt("Press 'a', 'b', or 'c'.");

    if (userInput2 === "a") {
        alert("A")
    } else if (userInput2 === "b") {
        alert("B")
    } else if (userInput2 === "c") {
        alert("C")
    }
    return userInput2
}


//     ### Challenge 2
// - Return the values of a, b, or c to use in the main function.

