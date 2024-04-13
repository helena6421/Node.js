#!/usr/bin/env node
const yargs = require('yargs')
const argv = process.argv.slice(2)
//const { hideBin } = require('yargs/helpers')
//const argv = yargs(hideBin(process.argv)).argv

let dateCurrent = new Date()

if(argv[0] == 'current' && argv[1] == '--year'){
    console.log(`Текущий год: ${dateCurrent.getFullYear()}`)
}
else if(argv[0] == 'current' && argv[1] == '--month'){
    console.log(`Текущий месяц: ${dateCurrent.getMonth()+1}`)
}
else if(argv[0] == 'current' && argv[1] == '--date'){
    console.log( `Дата в календарном месяце: ${dateCurrent.getDate()}`)
}
else if(argv[0] == 'add'){
    function add(){
        let future = new Date()
        future.setMonth(future.getMonth() + 2)
        console.log(future)
    }
    add()
}
else if(argv[0] == 'sub'){
    function sub(){
        let past = new Date()
        past.setMonth(past.getMonth() - 3)
        console.log(past)
    }
    sub()
}
else if(argv[0] == 'current'){
    console.log(`Текущая дата и время в формате ISO: ${dateCurrent}`)
}
else {
    console.log('Something went wrong')
}

console.log(argv);