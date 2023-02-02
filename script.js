const gameArea=document.querySelector(".game_area");
const resultArea=document.querySelector(".result");

let userScore=0;
let userScore_para=document.getElementById("user-score");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(user,computer){
    if(user=='r' && computer=='s'){
        document.getElementById("result-user-img").src="images/stone.png";
        document.getElementById("result-pc-img").src="images/scissor.png";
    }
    if(user=='p' && computer=='r'){
        document.getElementById("result-user-img").src="images/paper.png";
        document.getElementById("result-pc-img").src="images/stone.png";
    }
    if(user=='s' && computer=='p'){
        document.getElementById("result-user-img").src="images/scissor.png";
        document.getElementById("result-pc-img").src="images/paper.png";
    }
    userScore++;
    userScore_para.innerHTML=userScore;
    document.getElementById("result-text").innerHTML="YOU WON AGAINST PC";
    gameArea.classList.add("invisible");
    resultArea.classList.remove("invisible");
}
function lose(user,computer){
    
    if(user=='r' && computer=='p'){
        document.getElementById("result-user-img").src="images/stone.png";
        document.getElementById("result-pc-img").src="images/paper.png";
    }
    if(user=='p' && computer=='s'){
        document.getElementById("result-user-img").src="images/paper.png";
        document.getElementById("result-pc-img").src="images/scissor.png";
    }
    if(user=='s' && computer=='r'){
        document.getElementById("result-user-img").src="images/scissor.png";
        document.getElementById("result-pc-img").src="images/stone.png";
    }
    document.getElementById("result-text").innerHTML="YOU LOST AGAINST PC";
    userScore--;
    if(userScore<0){
        userScore=0;
    }
    userScore_para.innerHTML=userScore;
    gameArea.classList.add("invisible");
    resultArea.classList.remove("invisible");
}
function draw(user,computer){
    document.getElementById("result-text").innerHTML="DRAW";
    if(user=='r' && computer=='r'){
        document.getElementById("result-user-img").src="images/stone.png";
        document.getElementById("result-pc-img").src="images/stone.png";
    }
    if(user=='p' && computer=='p'){
        document.getElementById("result-user-img").src="images/paper.png";
        document.getElementById("result-pc-img").src="images/paper.png";
    }
    if(user=='s' && computer=='s'){
        document.getElementById("result-user-img").src="images/scissor.png";
        document.getElementById("result-pc-img").src="images/scissor.png";
    }
    gameArea.classList.add("invisible");
    resultArea.classList.remove("invisible");
}

function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,ComputerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,ComputerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,ComputerChoice);
            break; 
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r")
})

paper_div.addEventListener('click',function(){
    game("p")
})

scissor_div.addEventListener('click',function(){
    game("s")
})

document.getElementById( "play_again").addEventListener('click',function(){
    gameArea.classList.remove("invisible");
    resultArea.classList.add("invisible")
})

document.getElementById( "try-again").addEventListener('click',function(){
    userScore_para.innerHTML='0';
})

}

main();

function rules() {
    document.querySelector(".vis").classList.toggle("rules-show")
}

function cross() {
    document.querySelector(".vis").classList.toggle("rules-show")
}

