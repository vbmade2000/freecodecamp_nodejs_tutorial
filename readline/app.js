const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

let num1 = 10;
let num2 = 20;

answer = num1 + num2;
rl.question(`What is the sum of ${num1} + ${num2}: `, (userInput) => {
    if (userInput.trim() == answer) {
        console.log('You entered correct answer');
        rl.close();
    } else {
        rl.setPrompt('Wrong answer. Please try again \n');
        rl.prompt();
        rl.on('line', (userInput)=>{
            if (userInput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt('Wrong answer. Please try again \n');
                rl.prompt();        
            }
        })
    }

});

rl.on('close', () => {
    console.log('Byooo');
});