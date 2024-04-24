#!/usr/bin/env node

const { error } = require('console');
const fs = require('fs')
const path = require('path')

//создание директории
// const dir = path.join(__dirname, 'answers')
// fs.mkdir(dir, (error) => {
//     if (error) throw Error(error)
//     console.log('ok')
// })

//считываение аргументов из консоли
const newtxt = process.argv[2];

//создание файла в директории
const file = path.join(__dirname, 'answers', newtxt)

//получение рандомного числа
function random(arr){
    return arr.splice([Math.floor(Math.random()*arr.length)],1)
}
let num = [1, 2]
let randomNum = random(num).toString()

//console.log(`Ответ: ${randomNum}`)

//передача randomNum в файл
fs.appendFile(file, randomNum, (error) => {
    if (error) throw Error(error)
    console.log('')
})

console.log(`Давай сыграем в консольную игру Орёл или Решка.`)

const readline  = require('readline').createInterface({
    input: process.stdin, 
    output: process.stdout
})

readline.question(`Отгадай, 1 или 2?`, answer => {
    if (answer == randomNum) {
        console.log(`Вы угадали число ${randomNum}`)
        readline.close()
    }
    else if (answer != randomNum) {
        console.log(`Вы не угадали число ${randomNum}`)
        readline.close()
    }
})
