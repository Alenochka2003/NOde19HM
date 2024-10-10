// Интерфейс для функции, принимающей строку и возвращающей boolean
interface StringToBooleanFunction {
    (input: string): boolean;
}

// Реализация функции
const isStringEmpty: StringToBooleanFunction = (input: string): boolean => {
    return input.trim().length === 0;
};

// Пример использования
console.log(`Is the string empty? ${isStringEmpty("   ")}`);
