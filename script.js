const screen = document.getElementById("screen");

let currentInput = "";
let resultDisplayed = false;

// Helper function to update the screen
function updateScreen(value) {
    screen.textContent = value;
}

// Add click event listeners to all buttons
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.id;

        if (id === "ac") {
            currentInput = "";
            updateScreen("0");
        } else if (id === "equals") {
            try {
                const replacedInput = currentInput
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/%/g, "/100");

                const result = eval(replacedInput);
                updateScreen(result);
                currentInput = result.toString();
                resultDisplayed = true;
            } catch (err) {
                updateScreen("Error");
                currentInput = "";
            }
        } else if (id === "square") {
            try {
                let value = eval(currentInput);
                let result = Math.sqrt(value);
                updateScreen(result);
                currentInput = result.toString();
            } catch (err) {
                updateScreen("Error");
                currentInput = "";
            }
        } else if (id === "cube") {
            try {
                let value = eval(currentInput);
                let result = Math.cbrt(value);
                updateScreen(result);
                currentInput = result.toString();
            } catch (err) {
                updateScreen("Error");
                currentInput = "";
            }
        } else {
            if (resultDisplayed && !isNaN(button.textContent)) {
                currentInput = button.textContent;
                resultDisplayed = false;
            } else {
                currentInput += button.textContent;
            }
            updateScreen(currentInput);
        }
    });
});

// Initialize screen
updateScreen("0");
