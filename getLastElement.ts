// Обобщенная функция для получения последнего элемента массива
function getLastElement<T>(array: T[]): T | undefined {
    return array[array.length - 1];
}

// Пример использования
const lastNumber = getLastElement([1, 2, 3, 4, 5]);
const lastString = getLastElement(["apple", "banana", "cherry"]);
console.log(`Last number: ${lastNumber}, Last string: ${lastString}`);
