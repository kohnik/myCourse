class LocalStorageService {
    clear() {
        localStorage.clear();
    }
  
    get(key) {
        return localStorage.getItem(key);
    }

    remove(key) {
        localStorage.removeItem(key);
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }
}
let localStorageService = new LocalStorageService();
localStorageService.set(1,1);
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */
let localStorageService = new LocalStorageService();

function t1() {
	localStorageService.set(1,1);
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

function t2() {
		let a2 = [7,6,5];
		localStorage.setItem('a2', JSON.stringify(a2));
}

document.querySelector('.b-2').addEventListener('click', t2);


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
		let a2Arr = JSON.parse(localStorage.getItem('a2'));
		let out = '';

		for(let i = 0; i < a2Arr.length; i++) {
				out += `${i} ${a2Arr[i]} <br>`;
		}

		document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').addEventListener('click', t3);


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

function t4() {
		let a4 = {
			hello: 'world',
			hi: 'mahai'
		};

		localStorage.setItem('a4', JSON.stringify(a4));
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
		let a4Arr = JSON.parse(localStorage.getItem('a4'));
		let out = '';

		for(let i in a4Arr) {
				out += `${i} ${a4Arr[i]} <br>`
		}

		document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
		localStorage.clear();
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

function t7() {
		let input = document.querySelector('.i-7').value;
		let a7 = [];
		// проверяем наличие массива в LS
		if (localStorage.getItem('a7')) {
				a7 = JSON.parse(localStorage.getItem('a7'))
		}
		// добавляем новое значение
		a7.push(input);
		// сохраняем
		localStorage.setItem('a7', JSON.stringify(a7));
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
		let res = JSON.parse(localStorage.getItem('a7'));
		res.pop();

		localStorage.setItem('a7', JSON.stringify(res))
}

document.querySelector('.b-8').addEventListener('click', t8);


