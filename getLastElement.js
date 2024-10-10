// Обобщенная функция для получения последнего элемента массива
function getLastElement(array) {
    return array[array.length - 1];
}
// Пример использования
var lastNumber = getLastElement([1, 2, 3, 4, 5]);
var lastString = getLastElement(["apple", "banana", "cherry"]);
console.log("Last number: ".concat(lastNumber, ", Last string: ").concat(lastString));
