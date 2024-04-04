// ----------------------------------------------

// const { setTimeout } = require('core-js');

//// 1. Работа кода и стек вызовов.
// const a = 1;

// function foo() {
//   return a;
// }

// function multiply(a, b) {
//   foo();
//   return a * b;
// }
// function multyAndSum(a, b, c) {
//   const multi = multiply(a, b);
//   return multi + c;
// }

//? Если мы выщываем multyAndSum()
// multyAndSum(1, 3, 4);
//* Stack
//TODO: foo();          3  executor context
//TODO: multiply();     2  executor context
//TODO: multyAndSum();  1  executor context

// В браузере примерно 10 000 тысяч вложенносте , после этого появляется ошибка о переполнении стека
// Такое переполнение можно вызвыть с помощью рекурсии к примеру
function foo2() {
  foo2; //()  Вместо ;  скобки чтобы вызвать бесконечный цикл
}

// Как блокировать однопоточный код , как его заставить остановиться ?
// Пример с помощью promt alert confirm

// console.log(1); //* 1
// alert('Да?'); // Выведет всплывающее окно
// console.log(2); //! 2 уже не выполниться , будет ждать пока не отреагируешь на alert()

// Асинхронные функции

// console.log(1, 'befereSetTimeout');
// setTimeout(() => {
//   console.log(2, 'setTimeout');
// }, 100);
// console.log(3, 'afterSetTimeout');

//* 1 log  Попал в стек выполнился удалился
//todo 2 log  Попал в стек увидел асинхронную функцию , отдал ее webAPI и  удалился
//* 3 log  Попал в стек выполнился удалился
//* 2 log  после двух 2 секунд в wabAPI , он попал в очередь, после этого
//*                                  был закинут в call steck  выполнился и  удалился

// setTimeout(() => {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 100);
//   console.log(4);
//   console.log(5);
//   console.log(6);
// }, 0);

//* ВЫведет  1 2 3 4 5 6 и в конце  'setTimeout'

// setTimeout(() => {
//   console.log(1);
// }, 0);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// setTimeout(() => {
//   console.log(3);
// }, 0);

//* ВЫведет  1 2 3

// console.log('A');

// const myPromise = new Promise((resolve, reject) => {
//   console.log('B');
//   // setTimeout(() => {
//   //! Важно !!!
//   resolve('E'); // отработает позже всех
//   //! Важно !!!
//   // }, 0);
//   console.log('C');
// }).then((value) => {
//   console.log(value, 'value');
// });

// console.log('D');

//* Выполнение A - B - C - D и E !

//  --------------------------------------------------------------
// ! Важно
//  Кол-бек на постоянные события могут забить очередь !
//  Такие как ресайз ширины экрана  или вычесление скролла
//  * Есть такие инстурменты дебаунс и тротлинг , чтобы избавиться от проблемы постоянных вызовов
