module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    function hundred(number) {
        return Math.trunc(number / 100) - 1;
    }

    if (number >= 0 && number < 10) {
        return ones[number];
    } else if (number >= 10 && number < 20) {
        return teens[number % 10];
    } else if (number >= 20 && number <= 99) {
        if (number % 10 === 0) {
            return tens[(number / 10) - 2];
        } else {
            return `${tens[Math.trunc(number / 10) - 2]} ${ones[number % 10]}`
        }
    } else if (number >= 100 && number <= 999) {
        if (number % 100 === 0) {
            return hundreds[(number / 100) - 1];
        } else if ((number >= 101 && number <= 109) || (number >= 201 && number <= 209) ||
            (number >= 301 && number <= 309) || (number >= 401 && number <= 409) ||
            (number >= 501 && number <= 509) || (number >= 601 && number <= 609) ||
            (number >= 701 && number <= 709) || (number >= 801 && number <= 809) || (number >= 901 && number <= 909)) {
            return `${hundreds[hundred(number)]} ${ones[number % 100]}`;
        } else if ((number >= 110 && number <= 119) || (number >= 210 && number <= 219) ||
            (number >= 310 && number <= 319) || (number >= 410 && number <= 419) || (number >= 510 && number <= 519) ||
            (number >= 610 && number <= 619) || (number >= 710 && number <= 719) || (number >= 810 && number <= 819) ||
            (number >= 910 && number <= 919)) {
            return `${hundreds[hundred(number)]} ${teens[number % 10]}`;
        } else if (number >= 120 && number <= 990 && number % 10 === 0) {
            return `${hundreds[hundred(number)]} ${tens[(number % 100) / 10 - 2]}`
        } else {
            return `${hundreds[hundred(number)]} ${tens[(Math.trunc(number / 10) - 2) % 10]} ${ones[number % 10]}`
        }
    }
}
