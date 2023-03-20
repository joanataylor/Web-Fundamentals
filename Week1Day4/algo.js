// function d6(){
//   var roll = Math.random();
//   roll*=6;
//   roll = Math.ceil (roll);

//   //should return 1,2,3,4,5, or 6
  
//   // for(var i = 1; i<=6; i++){

//   // }
//   return roll;
// }

// var playerRoll = d6();
// console.log(`The player rolled a ${playerRoll}!!`);

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

function part2(){
  var roll = Math.random();
  roll*=lifesAnswers.length;
  roll = Math.floor (roll);
  return roll;
}

// console.log(part2());
console.log(lifesAnswers[part2()]);