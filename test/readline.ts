
import * as readline from 'mz/readline';

const rl = readline.createInterface(process.stdin);

rl.question('What is your favorite food?').then(answer => {
  console.log(`Oh, so your favorite food is ${answer}`);
});
