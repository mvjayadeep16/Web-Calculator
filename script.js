const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", (e) => {

    const key = e.key;

    // Numbers
    if (!isNaN(key)) {
        display.value += key;
    }

    // Operators
    else if (["+", "-", "*", "/", ".", "(", ")"].includes(key)) {
        display.value += key;
    }

    // Enter = Calculate
    else if (key === "Enter") {
        e.preventDefault();
        calculate();
    }

    // Backspace = Delete Last Character
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = Clear Display
    else if (key === "Escape") {
        clearDisplay();
    }

    // Scientific Shortcuts
    else if (key.toLowerCase() === "s") {
        display.value += "Math.sin(";
    }

    else if (key.toLowerCase() === "c") {
        display.value += "Math.cos(";
    }

    else if (key.toLowerCase() === "t") {
        display.value += "Math.tan(";
    }

    else if (key.toLowerCase() === "l") {
        display.value += "Math.log10(";
    }

    else if (key.toLowerCase() === "n") {
        display.value += "Math.log(";
    }

    else if (key.toLowerCase() === "r") {
        display.value += "Math.sqrt(";
    }

    else if (key.toLowerCase() === "p") {
        display.value += "Math.PI";
    }
});