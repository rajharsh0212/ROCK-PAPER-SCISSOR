let userScore=0;
let compScore=0;
const icons= document.querySelectorAll(".icon");
let message= document.getElementById("message");
let playerScore= document.getElementById("playerScore");
let computerScore= document.getElementById("computerScore");
let reset= document.getElementById("reset");
let messagebox= document.querySelector(".message-box");
reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    playerScore.innerText=userScore;
    computerScore.innerText=compScore;
    message.innerText="Game Reset. Play your move !";
    message.style.color="pink";
    messagebox.style.backgroundColor="#590d22";
    messagebox.style.border="dashed 4px #ffa6c1";
});
const computerplay=()=>{
    let arr=["Rock","Paper","Scissor"];
    let random= Math.floor(Math.random()*3);
    return arr[random];
};
const playGame = (userChoice) => {
    const computerChoice = computerplay();
    let resultMessage = "Play your move !";

    if (userChoice === computerChoice) {
        resultMessage = "Tie! Both chose " + userChoice;
        message.style.color = "#ffa6c1";
        messagebox.style.backgroundColor="black";
        messagebox.style.border="dashed 4px #ffa6c1";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissor") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
        userScore++;
        resultMessage = `You won! Your ${userChoice} beats Computer's ${computerChoice}`;
        message.style.color = "white";
        messagebox.style.backgroundColor="green";
        messagebox.style.border="dashed 4px black";
        playerScore.innerText = userScore;
    } else {
        compScore++;
        resultMessage = `Computer won! Computer's ${computerChoice} beats Your ${userChoice}`;
        message.style.color = "pink";
        messagebox.style.backgroundColor="red";
        messagebox.style.border="dashed 4px black";
        computerScore.innerText = compScore;
    }
    message.innerText = resultMessage;
};
icons.forEach((icon)=>{
    console.log(icon);
    icon.addEventListener("click",()=>{
        let userChoice=icon.id;
        playGame(userChoice);
    });
});

