#!/usr/bin/env node

function getRandom(max) {
    return Math.floor(Math.random() * max);
}
const num = getRandom(101);
console.log(num);

// взаимодействие с консолью
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    readline.question('Продолжай разгадывать...'+'\n', (number) => { 
        let patt1 = /[0-9]/g;
        if (number.match(patt1) && number > num) {
            console.log('Меньше!');
            askQuestion();
        } else if (number.match(patt1) && number < num) {
            console.log('Больше!');
            askQuestion();
        } else if (number.match(patt1) && number == num) {
            console.log(`Отгадано число ${num}!`);
            readline.close();
        }
    })
};

readline.question('Давай сыграем в игру "Загадай число".'+'\n'+'Я загадала число в диапазоне от 0 до 100.'+'\n'+'Угадай моё число.'+'\n', (number) => {  
    let patt1 = /[0-9]/g;
    if (number.match(patt1) && number > num) {
        console.log('Меньше!');
        askQuestion();
    } else if (number.match(patt1) && number < num) {
        console.log('Больше!');
        askQuestion();
    } else if (number.match(patt1) && number == num) {
        console.log(`Отгадано число ${num}!`);
        readline.close();
    }
});

// function comparisonNumber(array, number) {
//     let patt1 = /[0-9]/g;
//     if (number.match(patt1) && number > array[0]+1) {
//         console.log('Меньше');
//     }
//     else if (number.match(patt1) && number < array[0]+1) {
//         console.log('Больше');
//     }
//     else if (number.match(patt1) && number == array[0]+1) {
//         console.log(`Отгадано число ${array}`);
//     }
// }; 

// readline.question('Давай сыграем в игру "Загадай число". Я загадала число в диапазоне от 0 до 100. Угадай моё число'+'\n', (number) => {  
//         //comparisonNumber(array, number);
//         let patt1 = /[0-9]/g;
//         if (number.match(patt1) && number > array[0]) {
//             readline.question('Меньше'+'\n', (number) => {
//                 if (number < array[0]) {
//                     readline.question('Меньше'+'\n', (number) => {
//                         if (number === array[0]) {
//                             console.log(`Отгадано число ${array}`);
//                             readline.close();
