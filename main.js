let random_number = [Math.floor(Math.random() * 100) + 1]

let btn = document.getElementById("btn");

let output = document.getElementById("outputText");

let display = document.getElementById("displayGuesses")

let count = 0;

btn.addEventListener("click", function(){
        let input = document.getElementById("userInput").value;

        if (input == random_number) {
            updateDisplay();
            output.innerHTML = `You guessed right, the number was ${random_number}`;
        }

        else if (input < random_number) {
            updateDisplay();
            output.innerHTML = "Too low, guess again";
        }

        else if (input > random_number) {
            updateDisplay();
            output.innerHTML = "Too high, guess again";
        }
    });

    function updateDisplay(){
        count++;
        display.innerHTML = count;
    };