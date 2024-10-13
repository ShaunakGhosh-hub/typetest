let startTime;
let inputField = document.getElementById('input-field');
let testString = document.getElementById('test-string').textContent;
let timeElapsed = document.getElementById('time-elapsed');
let messageSection = document.getElementById('message-section'); // New element
let resetButton = document.getElementById('reset-button');


inputField.addEventListener('keydown', startTypingTest);

function startTypingTest() {
    if (!startTime) {
        startTime = new Date().getTime();
        inputField.addEventListener('input', checkTypingProgress);
        resetButton.addEventListener('click', resetTypingTest);
    }
}

function checkTypingProgress() {
    let typedText = inputField.value.toUpperCase();
    let testStringArray = testString.split(' ');
    let correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === testStringArray[i]) {
            correctChars++;
        }
    }

    if (correctChars === testStringArray.length) {
        let endTime = new Date().getTime();
        let elapsedTime = (endTime - startTime) / 1000;
        timeElapsed.textContent = `Time Elapsed: ${elapsedTime.toFixed(2)} seconds`;

        // Print messages based on elapsed time
        if (elapsedTime < 3) {
            messageSection.textContent = 'SHITE , you\'re a typing master!';
        } else if (elapsedTime < 4) {
            messageSection.textContent = 'Hope You Go this Fast in bed...';
        } else if (elapsedTime < 5) {
            messageSection.textContent = 'Good job! You\'re getting the hang of it!';
        } else if (elapsedTime < 7) {
            messageSection.textContent = 'WALLAHI !! You Stink....';
        } else if (elapsedTime < 10) {
            messageSection.textContent = 'Keep practicing! You\'ll get there in a year.';
        } else if (elapsedTime < 15) {
            messageSection.textContent = 'BRO!! GET BACK TO STONE AGE asap';
        } else {
            messageSection.textContent = 'https://www.flipkart.com/nokia-105-single-sim-keypad-mobile-phone-wireless-fm-radio/p/itm1b5465d126eb5?pid=MOBGQFVGYU2F5CYT&lid=LSTMOBGQFVGYU2F5CYTRPXNNC&marketplace=FLIPKART&q=nokia+mobiles+keypad&store=tyy%2F4io&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=organic&iid=a961e1de-4797-4810-a60d-75fb855d6a11.MOBGQFVGYU2F5CYT.SEARCH&ppt=hp&ppn=homepage&ssid=71q1qutu680000001728834268618&qH=567b35eef59095c2';
        }

        inputField.removeEventListener('input', checkTypingProgress);
    }
}

function resetTypingTest() {
    inputField.value = '';
    startTime = null;
    timeElapsed.textContent = 'Time Elapsed: 0 seconds';
    messageSection.textContent = ''; // Clear message section
    inputField.removeEventListener('input', checkTypingProgress);
    inputField.addEventListener('keydown', startTypingTest);
}