//电脑选择
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


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection)
{
    if(playerScore >=5 || computerScore >=5) return;

    const computerSelection = getComputerChoice();
    let result = "";

    if(playerSelection == computerSelection)
    {
        result = `It^s a tie！Both chose ${playerSelection}`;
    }
    else if((playerSelection =="rock"&&computerSelection == "scissors")||
    (playerSelection =="scissors"&&computerSelection == "paper")||
    (playerSelection =="paper"&&computerSelection == "rock"))
    {
        playerScore++;
        result = `You lose! ${playerSelection} beats ${computerSelection}`;
    }
    else
    {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    //更新UI
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Player:${playerScore} | Computer：${computerScore}`;

    //检查是否有玩家达到5分
    if(playerScore == 5)
    { 
        document.getElementById("result").textContent = "You won the game!";
    } 
    else if(computerScore == 5)
    {
        document.getElementById("result").textContent = "Computer won the game!";
    }
    

}

//绑定按钮事件
document.getElementById("rock").addEventListener("click",() => playRound("rock"));
document.getElementById("paper").addEventListener("click",() => playRound("paper"));
document.getElementById("scissors").addEventListener("click",() => playRound("scissors"));




