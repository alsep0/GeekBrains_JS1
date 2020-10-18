// 1. Написать функцию, преобразующую число в объект. Передавая на вход число, мы должны получить
//    на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например,
//    для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.

const digit = {
    number: prompt('Введите число'),
    units: 0,
    tens: 0,
    hundreds: 0,
};

if (digit.number <= 9) {
    digit.units = digit.number;
} else if (digit.number <= 999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else if (digit.number <= 9999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 100);
} else if (digit.number <= 99999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 1000);
} else if (digit.number <= 999999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10000);
} else if (digit.number <= 9999999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 100000);
} else if (digit.number <= 99999999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 1000000);
} else if (digit.number <= 999999999) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10000000);
}

console.log(digit)

// 2. Продолжить работу с интернет-магазином:
//    В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//    Реализуйте такие объекты.
//    Перенести функционал подсчета корзины на объектно-ориентированную базу.
//    На дополнительный плюс - реализовать класс корзины. Свойство - сама корзина (массив).
//    Методы - подсчет стоимости, добавление товара в корзину.

class Products {
    name = ''
    price = 0

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const myProduct1 = new Products('dress', 1000)
const myProduct2 = new Products('coat', 2500)
const myProduct3 = new Products('shirt', 400)
const myProduct4 = new Products('jeans', 800)
const myProduct5 = new Products('hat', 600)

console.log(myProduct1)
console.log(myProduct2)
console.log(myProduct3)
console.log(myProduct4)
console.log(myProduct5)

basketArr = [myProduct1, myProduct2, myProduct3, myProduct4, myProduct5];

Array.prototype.sum = function (prop) {
    let sum = 0
    for (let i = 0, _len = this.length; i < _len; i++) {
        sum += this[i][prop]
    }
    return sum
}

console.log(`Сумма товаров составляет: ${basketArr.sum("price")} рублей`)

// Второй вариант:

const basket = [
    {
        product: "jacket",
        price: 2000
    },
    {
        product: "boots",
        price: 2500
    },
    {
        product: "sweater",
        price: 450
    },
    {
        product: "skirt",
        price: 900
    },
    {
        product: "belt",
        price: 500
    },
];

Array.prototype.sum = function (prop) {
    let sumB = 0
    for (let i = 0, _len = this.length; i < _len; i++) {
        sumB += this[i][prop]
    }
    return sumB
}
console.log(basket)
console.log(`Сумма товаров составляет: ${basket.sum("price")} рублей`)