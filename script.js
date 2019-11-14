let threefive = "NS Code",
    three = "NS",
    five = "Code",
    numbers = [];

function nsCode(divider, dividend) {
    if ((dividend % divider)) {
        return true;
    }
}
for (let i = 0; i < 10; i++) {
    numbers[i] = prompt("wprowadź liczbę numer: " + (i + 1));
}

for (let i = 0; i < 10; i++) {
    threefive += (((nsCode(5, numbers[i]))) ? "" : ((nsCode(3, numbers[i])) ? "" : (" " + numbers[i])));
    three += ((nsCode(3, numbers[i])) ? "" : (" " + numbers[i]));
    five += ((nsCode(5, numbers[i])) ? "" : (" " + numbers[i]));
}

for (let i = 0; i < 10; i++) {
    threefive += (((nsCode(5, numbers[i]))) ? "" : ((nsCode(3, numbers[i])) ? "" : (" " + numbers[i])));
    three += ((nsCode(3, numbers[i])) ? "" : (" " + numbers[i]));
    five += ((nsCode(5, numbers[i])) ? "" : (" " + numbers[i]));
}
console.log(three);
console.log(five);
console.log(threefive);

document.write("<ol style=\"list-style-type: upper-roman;\">");
document.write("<li>" + three + "</li>");
document.write("<li>" + five + "</li>");
document.write("<li>" + threefive + "</li>");

document.write("</ol>");
