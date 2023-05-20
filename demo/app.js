const phoneNumbers = [
    '+41 76 123 45 67', // Swiss mobile, formatted
    '0041761234567', // Swiss mobile
    '+41 31 123 45 67', // Swiss landline, formatted
    '0041311234567', // Swiss landline
    '+33 6 12 34 56 78', // French mobile, formatted
    '+49 151 23456789', // German mobile, formatted
];

// function to detect mobile swiss phone numbers
function isSwissMobilePhoneNumber(phoneNumber) {
    return phoneNumber.match(/^(\+41|0041|0)(7[5-9]|76|78)[0-9]{7}$/);
}

// function to detect landline swiss phone numbers
function isSwissLandlinePhoneNumber(phoneNumber) {
    return phoneNumber.match(/^(\+41|0041|0)([1-4]|6|8|9)[0-9]{7}$/);
}

// function to detect french mobile phone numbers
function isFrenchMobilePhoneNumber(phoneNumber) {
    return phoneNumber.match(/^(\+33|0033|0)(6|7)[0-9]{8}$/);
}

// function to detect german mobile phone numbers
function isGermanMobilePhoneNumber(phoneNumber) {
    return phoneNumber.match(/^(\+49|0049|0)(1[5-7]|1[7-9]|15)[0-9]{8}$/);
}

// remove whitespaces and dashes
phoneNumbers.forEach((phoneNumber, index) => {
    phoneNumbers[index] = phoneNumber.replace(/[\s-]/g, '');
});

// loop through phone numbers
phoneNumbers.forEach(phoneNumber => {
    if (isSwissMobilePhoneNumber(phoneNumber)) {
        console.log(`${phoneNumber} is a Swiss mobile phone number`);
    } else if (isSwissLandlinePhoneNumber(phoneNumber)) {
        console.log(`${phoneNumber} is a Swiss landline phone number`);
    } else if (isFrenchMobilePhoneNumber(phoneNumber)) {
        console.log(`${phoneNumber} is a French mobile phone number`);
    } else if (isGermanMobilePhoneNumber(phoneNumber)) {
        console.log(`${phoneNumber} is a German mobile phone number`);
    } else {
        console.log(`${phoneNumber} is not a mobile phone number`);
    }
});
