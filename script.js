'use strict';
const book = document.querySelectorAll('.book'),
    adv = document.querySelector('.adv'),
    bookTree = book[4].querySelector('a'),
    bookTwoElementsLi = book[0].querySelectorAll('li'),
    bookFiveElementsLi = book[5].querySelectorAll('li'),
    bookSixElementsLi = book[2].querySelectorAll('li');

// console.log('book[0]: ', book[0]);



// Изменили порядок книг
book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);
// console.log(book);
//Заменили фоновую картинку
document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

// Исправляем заголовок книги
bookTree.innerText = 'Книга 3. this и Прототипы Объектов';

//удалили рекламу
adv.remove();

// Меняем главы 2 книги
bookTwoElementsLi[2].before(bookTwoElementsLi[3]);
bookTwoElementsLi[2].before(bookTwoElementsLi[6]);
bookTwoElementsLi[9].after(bookTwoElementsLi[2]);
bookTwoElementsLi[8].after(bookTwoElementsLi[7]);
bookTwoElementsLi[4].before(bookTwoElementsLi[8]);

// Меняем главы 5 книги
bookFiveElementsLi[2].before(bookFiveElementsLi[9]);
bookFiveElementsLi[4].after(bookFiveElementsLi[2]);
bookFiveElementsLi[7].after(bookFiveElementsLi[5]);

const newChapter = document.createElement('li');
newChapter.innerHTML = `Глава 8: За пределами ES6`;

bookSixElementsLi[8].after(newChapter);