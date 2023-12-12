
//TASK 1. Напишите цикл, который с каждой итерацией будет уменьшать переменную, пока она не достигнет нуля и выполнение цикла не прекратится

/*
let i = 4;
while (i >= 0) {
    console.log(i);
    i--;
}
*/


/*TASK 2. Создайте переменную, которая будет содержать статус пользователя(vip, gold, silver), 
если vip - тогда скидка 10%, 
если silver - скидка 20%,
если gold - скидка 30%
(скидку вывести на экран)
Использовать switch case )
*/

/*
let userStatus = 'silver';

switch(userStatus) {
    case 'silver': 
    alert('Ваша скидка 20%')
    break;

    case 'gold':
    alert('Ваша скидка 30%')
    break;

    case 'vip': 
    alert('Ваша скидка 10%')
    break;

    default: 'У вас нет никакой скидки'
}
*/


/*
TASK 3.Выведите в браузере числа от 1 до 49, вывести только нечётный числа.
Пример:
1
3
5
7
...
49
*/
/*
let b = 1;
while (b < 50) {
    if (b % 2 !== 0) {
        console.log(b);
    }
    b++;
}
*/


//TASK 4. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

/*
let days = ['понеделник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

for(let c = 0; c < days.length; c++) {
   switch(days[c]) {
    case 'суббота':
    case 'воскресенье':
        console.log('strong')
    break;
    
    default: console.log(days[c]);
   }
}
*/


//TASK 5. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями

/*
let i = 1;
function cost(n) {
    while(i < n) {
        console.log(i);
        i++;
    }
}
cost(20);
*/


/*TASK 6. В строке находятся буквы "ofdsjgoidfjg". Необходимо проверить, является ли в этой строке первая буква "a", если да - то вывести в консоль "ДА, если нет - то вывести в консоль "Нет"
Усложнение задания: В случае, если первая буква не "а", надо проверить, есть ли в строке такая буква, и если есть - то указать сколько их тут
Необходимые методы для решения задач. split(), join(), indexOf() or include().
*/

/*
let string = 'ofdsjgoidfjg';

if (string[0] == 'a') {
    console.log('да');
} else {
    console.log('нет');
}
*/


/*
***TASK Задача со звёздочкой.

Таблица приведена на картинке
Описание:

Необходимо в тег <body> поместить таблицу размером 10 на 10 ячеек.
Создать таблицу надо с помощью JS. Создаваться она будет благодаря двум циклам (например: один for делает строки, второй for внутри первого fora создаёт колонки ). В html должен быть пустой тег body, всё делается с помощью JS

Необходимые методы, про которые мы не говорили: append, prepend ( для вставки тегов в body ), classList.toggle()( для изменения класса элемента )

------Усложнение задачи со здёздочкой номер 1 --------
Сделать так, чтобы ячейки на двух диагоналях были чёрного цвета, а все остальные ячейки были белого.

------Усложнение задачи со здёздочкой номер 2 --------
Сделать так, чтобы при клике на ячейку, она меняла цвет не противоположный.



Если будут вопросы - обязательно спрашивай!

*/


let table = document.createElement('table');
document.body.prepend(table); 

let selectedTd;
table.onclick = function(event) {
  let target = event.target;

  if (target.tagName != 'TD') return; 

  highlight(target); 
};

function highlight(td) {
    td.classList.toggle('highlight');
  }

for(let i = 0; i < 10; i++) {

    let row = document.createElement('tr');
    table.prepend(row);
    row.innerHTML = 'Hello';

    for(let c = 1; c < 10; c++) {
        let col = document.createElement('td');
        row.prepend(col);
        col.innerHTML = 'Hello';
        console.log(132)
        if(i === c) {
            col.classList.add('highlight')
            console.log(132)
        }

        if(10 - i === c) {
            col.classList.add('highlight')
            console.log(132)
        }
    }
}

