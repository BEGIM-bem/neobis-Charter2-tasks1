/*---------------------ДЛЯ ЗАПУСКА В ТЕРМИНАЛЕ НАПИШИТЕ node tasks#2.js-------------------------------------*/

/*Напишите программу на JavaScript для отображения текущего дня и времени в следующем формате.
Пример вывода:
Сегодня пятница.
Текущее время: 16:00: 50: 22*/
let data = new Date()
let Hours = data.getHours();
let Minutes = data.getMinutes();
let Seconds = data.getSeconds()
let Milliseconds = data.getMilliseconds()
let DayWeek = data.getDay()
let result

switch (DayWeek) {
    case 0:
        result = "воскресенье"
        break
    case 1:
        result = "понедельник"
        break
    case 2:
        result = "вторник"
        break
    case 3:
        result = "среда"
        break
    case 4:
        result = "четверг"
        break
    case 5:
        result = "пятница"
        break
    case 5:
        result = "суббота"
        break
}

console.log(`Сегодня ${result}.`)
console.log(`Текущее время: ${Hours}:${Minutes} : ${Seconds} : ${Milliseconds}`)


// Напишите функцию JavaScript, которая переворачивает число.
// Пример x = 32243;
// Ожидаемый результат: 34223

let number = String(32243)
let numberReverse = number.split("").reverse().join("");
console.log(`Пример number = ${number}`)
console.log("Ожидаемый результат: ", numberReverse)

// Напишите программу на JavaScript для вычисления факториала числа. В математике факториал
//  неотрицательного целого числа n, обозначаемого n !, является произведением всех положительных целых чисел,
//  меньших или равных n.
// Например, 5! = 5 х 4 х 3 х 2 х 1 = 120

function findFactorial(number) {
    let Factorial = 1
    for (let i = 1; i <= number; i++) {
        Factorial *= i
        console.log(Factorial)
    }
}
findFactorial(5)

// Напишите программу на JavaScript, которая принимает два целых числа и отображает большее.
function CheckMaxNumber(numberA, numberB) {
    return numberA >= numberB ? numberA : numberB
}
console.log(CheckMaxNumber(40, 4000))

// Напишите простую программу на JavaScript, чтобы объединить все элементы следующего массива в строку.
// Пример массива: myColor = [«Красный», «Зеленый», «Белый», «Черный»];
// Ожидаемый результат:
// «Красный, зеленый, белый, черный»
// «Красный + зеленый + белый + черный»
let myColor = ["Красный", "Зеленый", "Белый", "Черный"];
let plus
let comma
for (let i = 0; i < myColor.length; i++) {
    plus = myColor.join(' + ');
    comma = myColor.join(", ")
}
console.log(comma)
console.log(plus)

// Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.
// Данные испытаний:
// console.log (имя_месяца (новая дата ("11.10.2009")));
// console.log (имя_месяца (новая дата ("13.11.2014")));
// Выход :
// "Октябрь"
// "Ноябрь"

function Find_month_name(date) {
    let month_name_all = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    return month_name_all[date.getMonth()]
}
console.log(Find_month_name(new Date("12.10.2009")));

// Напишите программу на JavaScript, чтобы проверить, является ли первый символ строки прописным или нет.
function CheckToUppercaseLetters(String) {
    return String[0] == String[0].toUpperCase() ? true : false
}
console.log(CheckToUppercaseLetters("Hello"))

