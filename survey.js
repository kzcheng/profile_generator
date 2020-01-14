const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? `, (a1) => {
  rl.question(`What's an activity you like doing? `, (a2) => {
    rl.question(`What do you listen to while doing that? `, (a3) => {
      rl.question(`Which meal is your favorite? `, (a4) => {
        rl.question(`What's your favorite thing to eat for that meal? `, (a5) => {
          rl.question(`Which sport is your absolute favorite? `, (a6) => {
            rl.question(`What is your superpower? `, (a7) => {
              console.log(`${a1} loves listening to ${a3} while ${a2}, devouring ${a5} for ${a4}, prefers ${a6} over any other sport, and is amazing at ${a7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });

});

// console.log(answer);