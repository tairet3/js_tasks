//Генератор випадкових дражнилок (завдання на роботу з масивами)

let randomBodyParts = ['Пахва', 'Щока', 'Гомілка', 'Жопа'];
let randomAjectives = ['Вонюча', 'Стрьомна', 'Сумна'];
let randomWords = ['Лопата', 'Клізма', 'Вівця', 'Ковбаса'];

//Операції з массивом
//Додати новий запис на початок массиву .unshift ,додаємо в початок масиву слова : 'Рука' та 'Мізинець'
randomBodyParts.unshift('Рука','Мізинець');

//Видалити перший запис на початку массиву .shift (метод зберігає дані в змінну)
let shiftBodyPart = randomBodyParts.shift();
//Можемо всавляти наші змінні не тільки за допомогою + а ще і починаючи писати в таких кавичках `` через конструкцію ${назва змінної}
console.log(`Запис '${shiftBodyPart}' було видалено з початку масиву і збережено в змінну shiftBodyPart`);

//Аналогічно працюють методи .push - додати новий запис в масив і .pop - видали останній запис з масиву і зберегти в змінну
//Щоб змінити якийсь запис в масиві просто звертаємось до нього через індекс і призначаємо нове значення
//Приклад : randomBodyParts[1] = 'Голова'; - таким чином запис 'Щока' було замінено на 'Голова'

//Додати новий запис на початок массиву .unshift ,додаємо в початок масиву слово 'Рука'

//Поєднуємо всі наші масиви і иводимо список наших слів в таблицю
let allWords = randomBodyParts.concat(randomAjectives, randomWords)
console.table(allWords);

//Вибір випадкової частини тіла

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
console.log(randomBodyPart);

//Вибір випадкового прикетника

let randomAjective = randomAjectives[Math.floor(Math.random() * randomAjectives.length)];
console.log(randomAjective);

//Вибір випадкового слова

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWord);

//Генеруємо нашу дражнилку і переводимо наші ипадкові слова до нижнього регістра
let randomInsult = 'У тебе ' + randomBodyPart.toLowerCase() + ' як ' + randomAjective.toLowerCase() + ' ' + randomWord.toLowerCase() + ' !!!';
console.log(randomInsult);


//Спосіб згенерувати дражнилку через join
let joinRandomInsult =['У тебе', randomBodyPart.toLowerCase(), 'як', randomAjective.toLowerCase(), randomWord.toLowerCase(), '!!!'].join(' ');
console.log(joinRandomInsult);



//За допомоги join перетворити масив [3,2,1] в рядок '3 більше за 2, а 2 більше ніж 1' (P.S. якщо при поєднаннічерез join нам не потрібен символ, 
//в данному випадку пропуск то ставимо +)
let numberArr = [3,2,1];

let taskResult = [numberArr[0],'більше за',numberArr[1]+', а',numberArr[1],'більше за',numberArr[2]].join(' ');
console.log(taskResult);


//Задача на звернення до елементів вкладеного масиву, потрібно вивести в консоль : 'Тобі потрібна : Ложка, цукор, чай та печиво'

let nastedArry = ['Ложка', 12, ['Ковдра','Ноутбук',33,'Цукор',null,['Чай', true, 123],'Літо'],'Печиво'];

console.log(`Тобі потрібна : ${nastedArry[0]}, ${nastedArry[2][3].toLowerCase()}, ${nastedArry[2][5][0].toLowerCase()} та ${nastedArry[3].toLowerCase()}`)

//Метод .slice для рядка (щоб вирізати якусь необхідну нам частину), в параметрах вказуємо індекс де буде початок і кінець через кому
//якщо передаємо лише один параметр початку то в результаті буде все що лишається після

let anyLine = 'Зараз ти вчиш JS';
let sliceLine = anyLine.slice(6,16); //Приклад : anyLine.slice(6); - результат такий самий
console.log(sliceLine);