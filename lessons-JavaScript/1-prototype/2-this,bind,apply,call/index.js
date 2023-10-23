function hello() {
    console.log("Hello", this)
}

// this всегда указывает на тот объект в контексте которого оно было вызывано(контекст слева)
const person = {
    name: "Aliaksei",
    age: 25,
    sayHello: hello,
    // если бы мы вызывали person.sayHelloWindow без bind нам вернет person
    // bind позволяет задать контекст который будет привязан к функции sayHelloWindow
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        // console.log(`Name is ${person.name}`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Job is ${phone}`)
        console.groupEnd()
    }
}

this === window; // true



const lena = {
    name: "Elena",
    age: 23,
}

// при помощи bind мы вызвали контекст lena в logInfo
// person.logInfo.bind(lena)();

// Одно и то же. Значения можно передавать сразу в bind
// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog("Frontend", "8-999-123-11");
// const fnLenaInfoLog = person.logInfo.bind(lena, "Frontend", "8-999-123-11");
// fnLenaInfoLog();


// person.logInfo.bind(lena, "Frontend", "8-999-123-11")();

// Метод call задает определенный контекст функции и параметры как и bind, но и сразу вызывает эту функцию без ().
// Методом bind мы задаем определенный контекст функции и параметры и можем ее вызывать когда угодно.
// person.logInfo.call(lena, "Frontend", "8-999-123-11");
// Метод apply работает точно так же как и call, но мы должны передавать только 2 параметра и только в массиве.
// Он так же сразу же вызывает эту функцию..
person.logInfo.apply(lena, ["Frontend", "8-999-123-11"])

////=================

const array = [1, 2, 3, 4, 5];
const arrayTwo = [2, 4, 6];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n;
//     })
// }
// console.log(multBy(array, 5));

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })
}

console.log(array.multBy(5));
console.log(arrayTwo.multBy(5));
