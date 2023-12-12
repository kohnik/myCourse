// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
const link = 'http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7';
const auth = 'auth=DdC33D7d2C2a7';

function t1() {
		let out = document.querySelector('.out-1');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=1`)
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=2&name=Pavel`)
						.then(data => {
								resolve(data.text())
						})
		})

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
		let out = document.querySelector('.out-2');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=3&num1=44&num2=44`)
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=4&num1=1&num2=100`)
						.then(data => {
								resolve(data.text())
						})
		});

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}

document.querySelector('.b-2').addEventListener('click', t2);


// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
		let out = document.querySelector('.out-3');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=5`)
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=6&num1=1&num2=100`)
						.then(data => {
								resolve(data.text())
						})
		});

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data
				})

}

document.querySelector('.b-3').addEventListener('click', t3);


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
		let out = document.querySelector('.out-4');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=7`)
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=8&year=1990`)
						.then(data => {
								resolve(data.text())
						})
		});

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
		let out = document.querySelector('.out-5');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=1`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=1`
				})
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=2&name=Pavel`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=2&name=Pavel`
				})
						.then(data => {
								resolve(data.text());
						})
		});

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}
document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
		let out = document.querySelector('.out-6');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=3&num1=444&num2=444`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=3&num1=444&num2=444`
				})
						.then(data => {
								resolve(data.text());
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=4&num1=1&num2=88`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=4&num1=1&num2=88`
				})
						.then(data => {
								resolve(data.text())
						})
		});

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}

document.querySelector('.b-6').addEventListener('click', t6);


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
		let out = document.querySelector('.out-7');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=5`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=5`
				})
						.then(data => {
								resolve(data.text());
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=6&num1=1&num2=888`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=6&num1=1&num2=888`
				})
						.then(data => {
								resolve(data.text());
						})
		})

		Promise.all([firstPromise, secondPromise])
				.then(data => {
						out.innerHTML = data;
				})
}
document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
		let out = document.querySelector('.out-8');

		const firstPromise = new Promise(resolve => {
				fetch(`${link}&action=7`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=7`
				})
						.then(data => {
								resolve(data.text())
						})
		});

		const secondPromise = new Promise(resolve => {
				fetch(`${link}&action=8&year=1990`, {
						method:'POST',
						headers: {'Content-type': 'application/x-www-form-urlencoded'},
						body: `${auth}&action=8&year=1990`
				})
						.then(data => {
								resolve(data.text())
						})
		});

		Promise.all([firstPromise, secondPromise]).then(data => out.innerHTML = data);
}

document.querySelector('.b-8').addEventListener('click', t8);

