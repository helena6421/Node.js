//На основе модуля http написать консольное приложение для динамической загрузки данных с API погоды 
//В качестве входных параметров клиент должен принимать название города, для которого требуется вывести прогноз.

const readline = require('node:readline/promises');
const input = require('node:process');
const http = require('node:http');
const dotenv = require('dotenv');

dotenv.config();
const rl = readline.createInterface({ input });
console.log(`Введите название города:`);

rl.on('line', (input) => {  
    const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.weatherApiKey}&q=${input}`;
    http.get(url, (res) => {
        const {statusCode} = res;
        if (statusCode !== 200){
            console.log(`statusCode: ${statusCode}`)
            return;
        }
        let rawData = '';
        res
        .setEncoding('utf-8')
        .on('data', (chunk) => rawData += chunk)
        .on('end', () => {
            console.log(JSON.parse(rawData));
        })
    })
    .on('error', (err) => {
        console.error(err);
    })  
    rl.close(); 
});