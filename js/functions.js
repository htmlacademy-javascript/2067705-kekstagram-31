// first

function checkStroke(arr, maxLength) {
    if (arr.length >= maxLength) {
        return true;
    } else {
        return false;
    }
}
console.log(checkStroke("абырвалг", 4));



// second

function checkPalindrome(str) {
    let lowerCaseStr = str.toLowerCase().replaceAll(' ', '');
    if (lowerCaseStr === lowerCaseStr.split("").reverse().join("")) {
        return true;
    } else {
        return false;
    }
    
}
console.log(checkPalindrome("Довод"));
console.log(checkPalindrome("Лёша на полке клопа нашёл "));