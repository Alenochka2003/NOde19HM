// Тип для функции, принимающей две строки
type CompareStrings = (str1: string, str2: string) => boolean;

// Реализация функции
const compare: CompareStrings = (str1: string, str2: string): boolean => {
    return str1 === str2;
};

// Пример использования
console.log(`Are the strings equal? ${compare("hello", "hello")}`);
