//Генератор випадкових дражнилок

let randomBodyParts = ['Пахва', 'Щока', 'Гомілка', 'Жопа'];
let randomAjectives = ['Вонюча', 'Стрьомна', 'Сумна'];
let randomWords = ['Лопата', 'Клізма', 'Вівця', 'Ковбаса'];

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
