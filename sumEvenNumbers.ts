// Функция для суммы четных чисел
const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
};

// Пример использования
const evenSum = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(`Sum of even numbers: ${evenSum}`);
