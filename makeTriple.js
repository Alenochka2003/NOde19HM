// Обобщенная функция для создания массива из трех элементов
function makeTriple(a, b, c) {
    return [a, b, c];
}
// Пример использования
var tripleNumbers = makeTriple(1, 2, 3);
var tripleStrings = makeTriple("a", "b", "c");
console.log("Triple numbers: ".concat(tripleNumbers, ", Triple strings: ").concat(tripleStrings));
