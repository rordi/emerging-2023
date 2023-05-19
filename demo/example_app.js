// read phone number from console input
const rawInput = process.argv[2];
let inputData = rawInput;

//inputData = removeWhiteSpaces(inputData);
//inputData = replaceLeadingDoubleZeroWithPlusSign(inputData);

console.log('Input data', inputData);

// function to validate a Swiss phone number, returns true or false
function validatePhoneNumber(number) {
    return /^\+41\d{9}$/.test(number);
}

// function to validate German or French phone number, returns true or false
function validateGermanOrFrenchPhoneNumber(number) {
    return /^\+49\d{10}$/.test(number) || /^\+33\d{9}$/.test(number);
}

// function to validate a Swiss mobile phone number, returns true or false
function validateMobilePhoneNumber(number) {
    return /^\+41(7[5-9]|8[1-9])\d{7}$/.test(number);
}

// function to validate email address, returns true or false
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function to replace leading double zero with plus sign in numeric input
function replaceLeadingDoubleZeroWithPlusSign(input) {
    // test if input is numeric only
    if (/^\d+$/.test(input)) {
        return input.replace(/^00/, '+');
    }

    return input;
}

// function to remove white spaces from input
function removeWhiteSpaces(input) {
    return input.replace(/\s/g, '');
}

// function to guess input type, returns 'phone', 'mobile' or 'email'
function guessInputType(input) {
    if (validatePhoneNumber(input)) {
        return 'ch_phone';
    } else if (validateMobilePhoneNumber(input)) {
        return 'ch_mobile';
    } else if (validateGermanOrFrenchPhoneNumber(input)) {
        return 'de_or_fr_phone';
    } else if (validateEmail(input)) {
        return 'email';
    } else {
        return 'unknown';
    }
}

//console.log('Input type', guessInputType(inputData));

const express = require('express');
const app = express();
const port = 3000;

app.get('/guess', (req, res) => {
    let inputData = req.query.input;
    // url decode input
    inputData = decodeURIComponent(inputData);
    inputData = removeWhiteSpaces(inputData);
    inputData = replaceLeadingDoubleZeroWithPlusSign(inputData);
    const inputType = guessInputType(inputData);

    res.send(inputType);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});