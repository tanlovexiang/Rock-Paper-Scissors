
function getComputerChoice()
{
    let values = Math.random() * 9;
    
    if(values<=3)
    {
        return "rock";
    }else if(values>3&&values<=6)
    {
        return "paper";
    }
    else{
        return "scissors";
    }

}

function getHumanChoice(){
    let choice = prompt("rock paper scissors?").toLowerCase();

    if(choice=="rock")
    {
        return "rock";
    }
    else if(choice=="paper")
    {
        return "paper";
    }
    else if(choice=="scissors")
    {
        return "scissors";
    }
    else
    {
        return "try again";
    }
}

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;

function playRound(humanChoice,computerChoice)
{
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if(humanChoice=="rock"&&computerChoice=="scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanChoice=="rock"&&computerChoice=="paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if(humanChoice=="paper"&&computerChoice=="scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if(humanChoice=="scissors"&&computerChoice=="rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else{
        console.log("No Winner!");
    }

    console.log("玩家分数：" + humanScore);
    console.log("电脑分数：" + computerScore);

}




function playGame()
{    
    for(let i=0;i<5;i++)
    {
        playRound(humanChoice,computerChoice)
    }

}

playGame();


