// Обобщенная функция для создания массива из трех элементов
function makeTriple<T>(a: T, b: T, c: T): T[] {
    return [a, b, c];
}

// Пример использования
const tripleNumbers = makeTriple(1, 2, 3);
const tripleStrings = makeTriple("a", "b", "c");
console.log(`Triple numbers: ${tripleNumbers}, Triple strings: ${tripleStrings}`);
