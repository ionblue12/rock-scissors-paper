console.log('hi');
const getUserChoice =userInput=>{
  userInput = userInput.toLowerCase();  
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('Error')
  }
}

const getComputerChoice =()=>{
  const randomChoice = Math.floor(Math.random() * 3);
  
  switch (randomChoice){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return 'invalid';
      break;
  }
}

const determinWinner=(userChoice, computerChoice)=>{
  if(userChoice === computerChoice){
    return console.log('Tie!');
  }
  if(userChoice ==='rock'){
    if(computerChoice ==='paper'){
      return console.log('Computer won!');
    }
    else{
      return console.log('User won!');
    }
  }
  if(userChoice ==='paper'){
    if(computerChoice ==='scissors'){
      return console.log('Computer won!');
    }
    else{
      return console.log('User won!');
    }
  }
  if(userChoice ==='scissors'){
    if(computerChoice ==='rock'){
      return console.log('Computer won!');
    }
    else{
      return console.log('User won!');
    }
  }
}
const playGame=(userChoice=getUserChoice('rock'), computerChoice = getComputerChoice())=>{
  console.log(`user choice is ${userChoice}, computer choice is ${computerChoice}`);
  determinWinner(userChoice, computerChoice);
}

playGame()








