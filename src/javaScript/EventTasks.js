// ----------------------------------------------------------------------------------------
function funckSecond(x) {
  console.log(`Какой Х пришёл -> ${x}`); // * 4, 9 =>  Какой Х пришёл -> ${20}
  return new Promise((resolve) => {
    // * 5. 10 => создается объект промис со всеми полями
    setTimeout(() => {
      // * 6. 11 => вызывается setTimeout через  5000
      resolve(x); // * 7. 12 => успешное выполнение будет через 5 секунд , выведеться 20
    }, 5000);
  });
}
async function add1(x) {
  console.log('add1 Hello'); // * 2 => вызовет консоле "add1 Hello"
  const a = await funckSecond(20); // * 3 => await будет ждать пока выполниться funckSecond, пока funckSecond будет выполняться код вне функции дальше будет выполняться синхронно , когда funckSecond выполниться сихнронный поток остановится и выполнит фунецию в которую передовалось 20
  const b = await funckSecond(30); // * 8 => Когда выполнилась функция funckSecond(20) и сохранила значение в 'a' , происходит тоже самое действие с этой функцией
  console.log('add1 Bye'); // * 13 => вызовет консоле 'add1 Bye'
  return x + a + b; // * 14 => выведет 60
}

add1(10).then(console.log); // * 1 => Увидел вызов положил в call Steck ,promise  pending.them()

// ----------------------------------------------------------------------------------------
let a;

let p4 = new Promise(function (resolve) {
  console.log('TEST A1', a); //*    1)синхронно, a = undefined
  a = 25;
  setTimeout(() => {
    console.log('TEST A2', a); //*  3)асинхронно, a = 25
    resolve(a);
  }, 100);
});

setTimeout(function timeout() {
  a = 10;
  console.log('TEST A3', a); //*   5) асинхронно, a = 10
}, 100);

p4.then(function (b) {
  console.log('TEST A4', a); //*   4)асинхронно, a = 25
});

console.log('TEST A5', a); //*     2)синхронно, a = 25
