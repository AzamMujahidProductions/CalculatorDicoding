// Introduction and Messages
alert("Welcome to my Calculator");

// Calculator Function
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
 }
  
 function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}
 
function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        calculator.displayNumber = '0';
    } else {
        alert('Your calculator ran into a problem and needs to restart.')
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Yooooooooo, no more errrrrooooooooorrrrrrrrr");
        return;
    }

    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    
    calculator.displayNumber = result;
}

// Calculator Event

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }
            
        inputDigit(target.innerText);
        updateDisplay();
    });
}
/*
Paper Mario: The Origami King[a] is a 2020 cross-genre video game released exclusively for the Nintendo Switch console. Developed by Intelligent Systems and published by Nintendo, it is the sixth game in the Paper Mario series, part of the larger Mario franchise. The story follows Mario and his friends as he sets out on a journey to prevent the Mushroom Kingdom from being transformed into origami. To do so, Mario must free Princess Peach's castle from five decorative streamers that extend across the kingdom.
The Origami King features cross-genre gameplay, blending elements of action-adventure, role-playing (RPG), and puzzle games. Controlling Mario, the player explores a large overworld and fights enemies in a turn-based style that uses a ring-based puzzle system. In combat, enemies are scattered on a circle stylized like a dartboard separated into four rings and additional columns. The player can rotate the rings horizontally and vertically to organize the enemies into patterns that result in being able to clear them quicker.
The Origami King's development team emphasized innovation to a greater extent than previous games in the series. Anticipating an inability to satisfy every fan, Intelligent Systems gravitated towards creating entirely new concepts. Origami and confetti were used as new variants of paper-themed concepts. The developers changed the traditional linear gameplay to an open world format and used enemies uninvolved with the Mario franchise. Nintendo intended to announce at E3 2020 as part of the 35th anniversary of Super Mario Bros. (1985), but the game was revealed prior to the event. Before release, the game was leaked and playable to hackers using emulation.
Reviewers praised the game's writing, design, characters, music, and game mechanics, and criticized it for straying from the series' original role-playing style. Critical reception of the combat system was mixed; while praised for its innovation, there was criticism for its lack of difficulty and purpose. The game had sold three million copies by September 2020, two months after release, making it both the fastest and best-selling game in the series and also one of the best-selling games on the Nintendo Switch. The game was nominated for three awards, and was listed among the best games of 2020 by multiple critics.
*/