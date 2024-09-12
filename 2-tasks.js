1. завдання
const a = +prompt("Введіть перше число");
const b = +prompt("Введіть друге число");
const operation = prompt("Operation: ");

if (operation === "-") {
    alert(`Result: ${a - b}`);
}
2. завдання
const a = +prompt("Введіть перше число:");
const b = +prompt("Введіть друге число:");

if (a > b) {
    alert(`Максимальне число: ${a}`);
} else if (b > a) {
    alert(`Максимальне число: ${b}`);
}
3. задача
const a = prompt("Введіть перше речення:");
const b = prompt("Введіть друге речення:");

const combinedSentence = a + b;

alert(`Скріплене речення: ${combinedSentence}`);
4.задача
  function getStringLength () {
    const a = prompt("Введіть рядок:");

    const length = a.length;

    alert(`Довжина рядка: ${length}`);
}

getStringLength();
