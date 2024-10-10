// Функция для суммы четных чисел
var sumEvenNumbers = function (numbers) {
    return numbers.reduce(function (sum, num) { return num % 2 === 0 ? sum + num : sum; }, 0);
};
// Пример использования
var evenSum = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log("Sum of even numbers: ".concat(evenSum));
