"use strict";

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

// learnJS('JavaScript', function() {
//     console.log('Я прошёл этот урок');
// });

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('q'));

// const logg = 'Hello world!';
// console.log(logg.slice(6, 10));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(11, 6));

// console.log(logg.substr(6, 2));



// const str = 'teSt';
// console.log(str[2]);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str);
// const arr = [1, 2, 4];
// console.log(arr.length);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("Hllo world!");
// console.log(num);

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNyn = ret();
// console.log(anotherNyn);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;
// const calc = (a, b) => { return a + b };
// const calc = a => a + b;
// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;   
// }
// while (num < 55);

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }

// let num = 50;
// for (let i = 1; i < 8; i++){
//     num++;
//     console.log(num);
// }

// const num = 101;

// if (num < 49) {
//     console.log('Malo yoba');
// } else if (num > 100) {
//     console.log('Dohuya bolno');
// } else {
//     console.log('Norm');
// }

// //альтернативный метод сравнения:
// const num = 50;
// (num === 50) ? console.log('Ok') : console.log('Error');

// const num = 51;
// switch (num) {
//     case 49:
//         console.log('Nope');
//         break;
//     case 100:
//         console.log('Nope');
//         break;
//     case 50:
//         console.log('Yep');
//         break;
//     default:
//         console.log('Not today');
//         break;
// }

// if (4 == 6) {
//     console.log('Okk!');
// } else {
//     console.log('TiPidor');
// }

// if (1) {
//     console.log('Vsegda eto otvechayu');
// }

// console.log('arr' + ' - object');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 === 8);

// const isChecked = false,
//       isClose = false;

// // console.log(isChecked && isClose);
// // console.log(isChecked || isClose);
// console.log(isChecked || !isClose);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = 'Pipa';

// alert(`Привет, ${user}`);

// alert('Hello');

// const result = confirm('Алё йоба?');
// console.log(result);

// const answer = +prompt('Ты кто, мальчик?', 'Хрен в пальто');
// // console.log(typeof(answer));
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Имя скажи?', '');
// answers[1] = prompt('Фамилия?', '');
// answers[2] = prompt('Сколько лет йопта щегол?', '');

// document.write(answers);
// console.log(typeof(answers));
// console.log(typeof(null));

// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const person = 'Alex';

// const bool = true;

// console.log(something);

// let und;
// console.log(und);

// const obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []];
// console.log(arr[0]);



// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// {
//     let result = 50;
// }

// console.log(result);

// alert(5);
// [].push('a');